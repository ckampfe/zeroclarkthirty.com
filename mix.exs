defmodule Zct.Mixfile do
  use Mix.Project

  def project do
    [app: :zct,
     version: "0.0.1",
     elixir: "~> 1.0",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  def application do
    [applications: [:logger]]
  end

  defp deps do
    [{:obelisk, "~> 0.10", github: "ckampfe/obelisk"},
     {:yamerl, github: "yakaz/yamerl"}]
  end
end