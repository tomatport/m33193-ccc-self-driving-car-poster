# general from ideas
- how to interpret different colours on either side of the road?
	- only chose the highest risk - utilitarianism says we should go with this, since it will maximise the safety
	- average (weighted or otherwise)
	- two edges, one for each direction (would also allow backtracking)
- is important to note that we will assume we travel at the same linear speed across all roads, regardless of distance
	- point out that in an ideal scenario, we would take into account the expected speed of the road (somehow)
- do we factor in the number of buildings?
	- probably not - they are not marked with what they are, so it is is impossible to even try and measure their 'importance'
- utilitarianism: 
	- focuses on outcomes - we can choose what an acceptable level of risk is based on the consequences
	- a more objective approach, "impartial," that will try and minimise risk
	- provides a framework for tougher problems - eg pedestrians vs passengers; utilitarianism would chose the path that resulted in the least harm overall (kill two pedestrians vs four pax)
	- but then how do you measure harm/benefit - what about old/young people, social status, profession?
	- in an ideal world, more thinking and consideration would be taken into account, with a hybrid of ethical theories and their benefits


# re: ethics
- real-world pathfinding algos and scenarios (google maps) pathfinding do not prescribe ethics nor take into account risk, only giving options to the user such as "avoid motorways" and etc

# MATHS
- lower risk multipliers would decrease distance, but likely increase time spent bordering riskier zones

- all set to the same value would be the fastest route, but ignores risk
- it is stated that green is half blue, and blue is half red - so if we assume business directly correlates to risk, multipliers must have the ratio of 1:2:4 (G:B:R) 

## Town 1
| Path       | Dist |   R |   B |   G | Notes                                      |
|:-----------|-----:|----:|----:|----:|:-------------------------------------------|
| Fastest    |   938 | 100%|  0% |  0% |                                            |
| Optimal    |  2091 |   0%| 15% | 85% | 44% more dist (slower), but totally avoids red zones, and only in blue for 15%. |

## Town 2
| Path       | Dist |   R |   B |   G | Notes                                      |
|:-----------|-----:|----:|----:|----:|:-------------------------------------------|
| Fastest    |  1543 | 49% | 51% |  0% |                                            |
| Optimal    |  2103 | 44% | 29% | 27% | 36% more dist, but spends less time in red and blue zones |

## Town 3
| Path       | Dist |   R |   B |   G | Notes                                      |
|:-----------|-----:|----:|----:|----:|:-------------------------------------------|
| Fastest    | todo | todo| todo| todo|                                            |
| Optimal    |  2678 |  39%| 33% | 28% | more than half the time in non-red zones   |
