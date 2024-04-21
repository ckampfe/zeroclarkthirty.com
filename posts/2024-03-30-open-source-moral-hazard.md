---
layout: post
title: Open source has a moral hazard problem
created: 2024-03-30
---

The cost society pays because of bad software is titanic. No matter how you measure it, in lost time, lost dollars, stolen identities, frustration, or whatever else, I don't think this point is controversial.

What may be controversial, though, is the realization that it is the users who pay most of these costs, not companies, and not developers of open source software.
I think this is because open source software has a [moral hazard](https://www.investopedia.com/terms/m/moralhazard.asp) problem:

> Moral hazard can exist when a party to a contract can take risks without having to suffer consequences.

That open source software has a moral hazard problem should not be surprising, as the popular open source licenses all disclaim liability explicitly.

For example:

[The 3-clause BSD license](https://opensource.org/license/bsd-3-clause):

> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

[The GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text):

> IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.


[The Apache license](https://www.apache.org/licenses/LICENSE-2.0):

> 8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

These licenses all say that as a condition of use, users of software cannot hold developers liable when that software causes them to have their bank details or identity stolen. I think this has an enormous effect on what tools developers choose to use, and how those tools shape the software ecosystem in aggregate. To make this interesting, let's flip things around and imagine a world where developers *are open to liability* when their software misbehaves and harms users. In this world, how would developers choose their tools and frameworks?

Take for example, the 800lbs gorilla in the room: the C language. Would anyone choose to continue write software in C? Would there be anywhere near as much new C code as there is today? Under an open liability regime, I think using C would be similar to building your home in California wildfire country: insurance companies would assess the risk, and the price of insurance would be far above what most people and organizations could pay. Only the richest organizations - those who know they need exactly what only C can provide, who can afford to spend the huge sums of money to make C safe - would choose C, like the rich choosing to build fireproof houses in lieu of homeowner's insurance. The average Joe open source developer (and every organization that isn't Apple/Google/Citadel) simply couldn't afford the liability exposure (and insurance premiums) that would come with using C.

Overnight, the demand for safer tools would explode. But crucially, this demand would be for tools that are not only safer in absolute terms, but tools that are also *easier to use safely*. That is a critical distinction, because in general, people are loath to give up productivity gains in the name of safety, often circumventing safety guards in order to regain lost productivity. I think this somewhat explains the rise of Rust and Go in the last 10 years, when Ada has already existed for decades. Rust and Go offer a developer experience better than Ada and C, are each substantially safer than C, while providing comparable performance.

While it is debatable whether the monetary cost of releasing unsafe software has gone up (maybe for companies, definitely not for developers), the social cost has definitely gone up. Developer culture has changed and continues to change such that releasing unsafe software using unsafe tools is more taboo than it used to be. Given the alternative of widespread litigation against individuals and teams of open source developers whose code is found to be insecure, the social taboo is probably the better approach. I'm a developer myself. I don't particularly like the idea of being personally liable for releasing code for free on the internet. But, at the same time, I also hate the idea of externalizing the costs of unsafe software onto users. Doing so seems unfair and irresponsible, and we have to fix that. Maybe Rust's biggest innovation has not been the Rust language itself - nice though it is - but its culture of attempting to mitigate the moral hazard of open source software development.

