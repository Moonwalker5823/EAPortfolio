import { workflow } from '../content';

export default function Workflow() {
  return (
    <section className="section" id="how-i-work" aria-labelledby="how-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="how-title">How I work</h2>
          <p>{workflow.lead}</p>
        </div>
        <ol className="steps">
          {workflow.steps.map((step) => (
            <li className="step" key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="workflow-extras">{workflow.extras}</p>
      </div>
    </section>
  );
}
