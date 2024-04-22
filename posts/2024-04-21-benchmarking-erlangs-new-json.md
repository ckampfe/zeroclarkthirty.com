---
layout: post
title: Benchmarking Erlang 27.0's new JSON module
created: 2024-04-21
---

Here are a few benchmarks comparing Elixir's `Jason` with the new `:json` module, which will ship in the standard library with Erlang 27.0. The usual caveats apply: I chose these example documents, this is my own hardware, etc.
Always run these kind of benchmarks on your own hardware with your own workload.


## inputs

<pre><code>
$ ls -lah fixtures
Permissions Size User  Date Modified Name
.rw-r--r--  923k clark 21 Apr 13:23  big.json
.rw-r--r--  3.9k clark 21 Apr 13:21  github.json
</code></pre>


## decode results

<pre><code>
at [ 14:06:31 ] ➜ mix run decode_bench.exs
Operating System: macOS
CPU Information: Apple M1 Max
Number of Available Cores: 10
Available memory: 64 GB
Elixir 1.16.2
Erlang 27.0-rc3
JIT enabled: true

Benchmark suite executing with the following configuration:
warmup: 3 s
time: 5 s
memory time: 0 ns
reduction time: 0 ns
parallel: 1
inputs: big, github
Estimated total run time: 32 s

Benchmarking :json.decode/1 with input big ...
Benchmarking :json.decode/1 with input github ...
Benchmarking Jason.decode/1 with input big ...
Benchmarking Jason.decode/1 with input github ...
Calculating statistics...
Formatting results...

##### With input big #####
Name                     ips        average  deviation         median         99th %
:json.decode/1        184.17        5.43 ms     ±1.19%        5.42 ms        5.77 ms
Jason.decode/1        170.45        5.87 ms     ±7.24%        5.72 ms        6.65 ms

Comparison:
:json.decode/1        184.17
Jason.decode/1        170.45 - 1.08x slower +0.44 ms

##### With input github #####
Name                     ips        average  deviation         median         99th %
:json.decode/1       83.18 K       12.02 μs    ±18.69%       11.88 μs       14.54 μs
Jason.decode/1       61.64 K       16.22 μs    ±25.01%          16 μs       19.17 μs

Comparison:
:json.decode/1       83.18 K
Jason.decode/1       61.64 K - 1.35x slower +4.20 μs
</code></pre>


## decode source

<pre><code>
~c"27" = :erlang.system_info(:otp_release)

github = File.read!("fixtures/github.json")
big = File.read!("fixtures/big.json")

# just assert that these actually work

{:ok, _} = Jason.decode(github)
{:ok, _} = Jason.decode(big)
# these throw, so no match
:json.decode(github)
:json.decode(big)

Benchee.run(
  %{
    "Jason.decode/1" => fn input -> Jason.decode(input) end,
    ":json.decode/1" => fn input -> :json.decode(input) end
  },
  inputs: %{
    "github" => github,
    "big" => big
  },
  warmup: 3
)
</code></pre>


## encode results

<pre><code>
$ mix run encode_bench.exs
Operating System: macOS
CPU Information: Apple M1 Max
Number of Available Cores: 10
Available memory: 64 GB
Elixir 1.16.2
Erlang 27.0-rc3
JIT enabled: true

Benchmark suite executing with the following configuration:
warmup: 3 s
time: 5 s
memory time: 0 ns
reduction time: 0 ns
parallel: 1
inputs: big, github
Estimated total run time: 32 s

Benchmarking :json.encode/1 with input big ...
Benchmarking :json.encode/1 with input github ...
Benchmarking Jason.encode_to_iodata/1 with input big ...
Benchmarking Jason.encode_to_iodata/1 with input github ...
Calculating statistics...
Formatting results...

##### With input big #####
Name                               ips        average  deviation         median         99th %
:json.encode/1                  439.97        2.27 ms    ±27.74%        2.09 ms        3.30 ms
Jason.encode_to_iodata/1        310.08        3.22 ms     ±4.10%        3.29 ms        3.55 ms

Comparison:
:json.encode/1                  439.97
Jason.encode_to_iodata/1        310.08 - 1.42x slower +0.95 ms

##### With input github #####
Name                               ips        average  deviation         median         99th %
:json.encode/1                246.56 K        4.06 μs   ±193.56%        3.96 μs        5.63 μs
Jason.encode_to_iodata/1      116.10 K        8.61 μs    ±26.61%        8.38 μs       11.17 μs

Comparison:
:json.encode/1                246.56 K
Jason.encode_to_iodata/1      116.10 K - 2.12x slower +4.56 μs
</code></pre>


## encode source

<pre><code>
~c"27" = :erlang.system_info(:otp_release)

github = File.read!("fixtures/github.json")
big = File.read!("fixtures/big.json")

# just assert that these actually work

{:ok, github_term} = Jason.decode(github)
{:ok, big_term} = Jason.decode(big)
# these throw, so no match
:json.decode(github)
:json.decode(big)

{:ok, _} = Jason.encode_to_iodata(github_term)
{:ok, _} = Jason.encode_to_iodata(big_term)
:json.encode(github_term)
:json.encode(big_term)

Benchee.run(
  %{
    "Jason.encode_to_iodata/1" => fn input -> Jason.encode_to_iodata(input) end,
    ":json.encode/1" => fn input -> :json.encode(input) end
  },
  inputs: %{
    "github" => github_term,
    "big" => big_term
  },
  warmup: 3
)
</code></pre>


## conclusion

It looks like there are some respectable gains to be had here, especially for encoding.
This `:json` module looks like a great addition, and it will be really nice to have it in the standard library.
I wish it didn't handle errors with exceptions, and instead offered an `{:ok, _} | {:error, _}` API, but we can probably graft that on after the fact in Elixir without too much trouble.

I've seen talk that `:json` will be integrated into `Jason` version 2 at some point,
so it's possible you won't have to change anything to realize these gains if you already use `Jason`.


