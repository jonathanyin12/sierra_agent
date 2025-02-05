# Agent Loop Exercise Summary Report: Jonathan Yin

## Testing and Reliability

_How would you test for regressions as a customer requests new changes? What monitoring and alerting would you like available?_

To ensure reliability as we roll out changes, we can run unit tests for core functionality to ensure that the new changes are not causing issues with the underlying code. Then, I would have a comprehensive end-to-end test suite with known existing customer scenarios. Within this suite, we would automatically compare responses between versions to ensure that the new changes are not causing issues. This would prevent regressions on existing functionality. I would also shadow test new versions alongside production to catch any issues early. To prevent misuse, I would do adversarial testing and prompt injection testing to ensure the agent behaves properly in those situations.

Real-time metrics for the agent would be useful to monitor the quality of the agent over time. This would allow us to detect any issues early and make sure the agent is performing well. Real-time resolution rate, hallucination rate, and average handle time would be useful metrics to monitor. Tracking escalation patterns and error types would also be useful to identify any issues with the agent's ability to handle complex cases. Separately, it would be useful to track token usage and API costs to ensure the agent is not exceeding the company's budget.

For an alerting system, we would want to be alerted if the agent's performance significantly drops. This could mean that CSAT scores have dropped, resolution rates are very low, hallucination rates are high, or the average handle time is much higher than usual. We would also want to be alerted if an agent fails to respond to a customer in a timely manner.

## Evaluation and Customer Success

_How would you measure success for an AI agent? What metrics would give customers visibility to the quality of the AI agent?_

Some traditional key metrics for success include the customer satisfaction score, resolution rate, and average handle time. Unlike for human agents, first response time is essentially instantaneous for the agent, so it is not a useful metric to measure.

CSAT is a standard metric for measuring customer satisfaction and can be used to track the quality of the agent over time and compare it to human agents. This is typically measured by asking customers to rate their experience on a scale of 1 to 5.

Resolution rate is also important since it is a good indicator of the efficacy of the agent and directly correlates with the company's cost savings. Agents with higher resolution rates escalate fewer cases to humans and handle more tickets per hour, reducing the the company's human labor costs. Being forced to escalate a case is also a frustrating experience for the customer, so it is important to minimize this.

Average handle time measures the average amount of time it takes for the agent to resolve a ticket. Lower average handle time saves time for the customer, which is correlated with higher customer satisfaction. Note that since agents can scale dynamically to meet demand, lowering average handle time doesn't translate to more tickets being handled per hour.

An additional metric unique to AI agents is hallucination/error rate, which is the percentage of tickets that the agent answers incorrectly. Hallucination is a key concern for customers, so it is important to minimize this and give them confidence that the agent is reliable.

## Customer Prioritization

_Please prioritize the remaining customer feature requests, share how you choose to prioritize them, and what additional information you would seek before implementation._

Ideally, I would ask the customer what inquiries they see most frequently from their customers and prioritize each feature based on that. However, for this exercise, I will prioritize based on my best guess of what are the most important commonly asked questions.

Here's my prioritization of the remaining 3 features:

1. Answer questions about specific products
2. Answer questions about product availability
3. Provide guidance on hiking questions

Answering questions about specific products is the most important because it is a very common customer request and is a key part of the agent's ability to help customers. Product availability is also important, but questions pertaining to product availability likely occur less frequently than general product questions. This is because the company site can show that a product is out of stock, so it is unlikely that the customer will ask the agent about it.

Providing guidance on hiking questions is the least important of the three because it is more so general advice and less specific to the company's products.

Before implementing these features, I would discuss with the customer the following questions:

For product-specific questions:

- What product data is available and in what format?
- Are there existing product documentation or knowledge bases we can leverage?
- What are the most common types of product questions received?

For product availability:

- Is there an existing API for real-time inventory checks?
- What is the desired response when items are out of stock (e.g., suggest alternatives, notify when back in stock)?

For hiking guidance:

- What is the scope of hiking advice expected (gear recommendations, trail difficulty, safety tips)?
- Does the company have existing hiking guides or content we can utilize?
- Are there liability concerns to consider when providing outdoor activity advice?
- Should recommendations be tailored to specific regions or seasons?
