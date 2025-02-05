# Agent Loop Exercise Summary Report: Jonathan Yin

## Testing and Reliability

_How would you test for regressions as a customer requests new changes? What monitoring and alerting would you like available?_

To ensure reliability as we roll out changes, we can run unit tests for core functionality to ensure that the new changes are not causing issues with the underlying code. Then, I would have a comprehensive end-to-end test suite with known existing customer scenarios. Within this suite, we would automatically compare responses between versions to ensure that the new changes are not causing issues. This would prevent regressions on existing functionality. I would also shadow test new versions alongside production to catch any issues early.

Real-time metrics for the agent would be useful to monitor the quality of the agent over time. This would allow us to detect any issues early and make sure the agent is performing well. Real-time resolution rate, hallucination rate, and average handle time would be useful metrics to monitor. Tracking escalation patterns and error types would also be useful to identify any issues with the agent's ability to handle complex cases.

For an alerting system, we would want to be alerted if the agent's performance significantly drops. This could mean that CSAT scores have dropped, resolution rates are very low, hallucination rates are high, or the average handle time is much higher than usual.

## Evaluation and Customer Success

_How would you measure success for an AI agent? What metrics would give customers visibility to the quality of the AI agent?_

Some traditional key metrics for success include the customer satisfaction score, resolution rate, and average handle time. Unlike for human agents, first response time is essentially instantaneous for the agent, so it is not a useful metric to measure.

CSAT is a standard metric for measuring customer satisfaction and can be used to track the quality of the agent over time and compare it to human agents. This is typically measured by asking customers to rate their experience on a scale of 1 to 5.

Resolution rate is also important since it is a good indicator of the efficacy of the agent and directly correlates with the company's cost savings. Agents with higher resolution rates escalate fewer cases to humans and handle more tickets per hour, reducing the the company's human labor costs. Being forced to escalate a case is also a frustrating experience for the customer, so it is important to minimize this.

Average handle time measures the average amount of time it takes for the agent to resolve a ticket. Lower average handle time saves time for the customer, which is correlated with higher customer satisfaction. Note that since agents can scale dynamically to meet demand, lowering average handle time doesn't translate to more tickets being handled per hour.

An additional metric unique to AI agents is hallucination/error rate, which is the percentage of tickets that the agent answers incorrectly. Hallucination is a key concern for customers, so it is important to minimize this and give them confidence that the agent is reliable.

## Customer Prioritization

_Please prioritize the remaining customer feature requests, share how you choose to prioritize them, and what additional information you would seek before implementation._
