import { Badge } from "@/components/ui/Badge";
import { FormattedText } from "@/components/ui/FormattedText";
import type {
  CommercialMatrix,
  PerformanceBenchmarks,
  ProjectResultItem,
  TestSuiteBreakdown,
  UiDictionary,
} from "@/content/types";

interface ResultsGridProps {
  ui: UiDictionary;
  results: ProjectResultItem[];
  testSuiteBreakdown?: TestSuiteBreakdown;
  benchmarks?: PerformanceBenchmarks;
  commercialMatrix?: CommercialMatrix;
}

export function ResultsGrid({
  ui,
  results,
  testSuiteBreakdown,
  benchmarks,
  commercialMatrix,
}: ResultsGridProps) {
  const visibleResults = results.filter((item) => !item.isPlaceholder);

  return (
    <div className="space-y-8">
      {testSuiteBreakdown ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold tracking-tight text-primary">
              {ui.caseStudyLabels.testingBreakdown}
            </h3>
            <span className="font-mono text-xs text-accent tabular-nums">
              {testSuiteBreakdown.totalTests.toLocaleString("es-CL")} /{" "}
              {testSuiteBreakdown.totalTests.toLocaleString("es-CL")} (100%) ·{" "}
              {testSuiteBreakdown.totalSuites} suites ·{" "}
              {testSuiteBreakdown.duration}
            </span>
          </div>

          <p className="text-sm leading-6 text-secondary">
            <FormattedText text={testSuiteBreakdown.summary} />
          </p>

          <ul className="flex flex-wrap gap-2">
            {testSuiteBreakdown.staticChecks.map((check) => (
              <li key={check}>
                <Badge>{check}</Badge>
              </li>
            ))}
          </ul>

          <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface">
            <table className="w-full min-w-[540px] text-left text-xs">
              <thead className="border-b border-border-subtle bg-subtle/60 font-mono text-[11px] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tableDomain}</th>
                  <th className="px-3 py-3 text-right">
                    {ui.caseStudyLabels.tableSuites}
                  </th>
                  <th className="px-3 py-3 text-right">
                    {ui.caseStudyLabels.tableTests}
                  </th>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tableScope}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {testSuiteBreakdown.domains.map((row) => (
                  <tr key={row.domain}>
                    <td className="px-4 py-3 font-medium text-primary">
                      {row.domain}
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-secondary tabular-nums">
                      {row.suites}
                    </td>
                    <td className="px-3 py-3 text-right font-mono font-semibold text-primary tabular-nums">
                      {row.tests}
                    </td>
                    <td className="px-4 py-3 leading-5 text-secondary">
                      <FormattedText text={row.scope} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {benchmarks ? (
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-tight text-primary">
            {ui.caseStudyLabels.benchmarks}
          </h3>

          <p className="text-sm leading-6 text-secondary">
            <FormattedText text={benchmarks.environment} />
          </p>

          <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface">
            <table className="w-full min-w-[600px] text-left text-xs">
              <thead className="border-b border-border-subtle bg-subtle/60 font-mono text-[11px] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3">
                    {ui.caseStudyLabels.tableScenario}
                  </th>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tableBefore}</th>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tableAfter}</th>
                  <th className="px-4 py-3">
                    {ui.caseStudyLabels.tableImprovement}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {benchmarks.comparisons.map((row) => (
                  <tr key={row.scenario}>
                    <td className="px-4 py-3 font-medium text-primary">
                      {row.scenario}
                    </td>
                    <td className="px-4 py-3 font-mono text-muted tabular-nums">
                      {row.before}
                    </td>
                    <td className="px-4 py-3 font-mono font-semibold text-primary tabular-nums">
                      {row.after}
                    </td>
                    <td className="px-4 py-3 text-secondary">
                      {row.improvement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benchmarks.specialized.map((spec) => (
              <div
                key={spec.test}
                className="rounded-xl border border-border-subtle bg-surface p-4"
              >
                <p className="text-xs font-semibold text-primary">
                  {spec.test}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {spec.scope}
                </p>
                <p className="mt-2 text-xs leading-5 text-secondary">
                  {spec.result}
                </p>
              </div>
            ))}
          </div>

          <p className="rounded-lg border border-border-subtle bg-subtle/40 p-3.5 text-xs leading-5 text-muted">
            <FormattedText text={benchmarks.methodologyNote} />
          </p>
        </div>
      ) : null}

      {commercialMatrix ? (
        <div className="space-y-4">
          <h3 className="text-base font-semibold tracking-tight text-primary">
            {ui.caseStudyLabels.commercialArchitecture}
          </h3>
          <p className="text-sm leading-6 text-secondary">
            {commercialMatrix.overview}
          </p>

          <div className="overflow-x-auto rounded-xl border border-border-subtle bg-surface">
            <table className="w-full min-w-[540px] text-left text-xs">
              <thead className="border-b border-border-subtle bg-subtle/60 font-mono text-[11px] text-muted uppercase">
                <tr>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tablePlan}</th>
                  <th className="px-4 py-3">
                    {ui.caseStudyLabels.tableTopology}
                  </th>
                  <th className="px-4 py-3">{ui.caseStudyLabels.tableStatus}</th>
                  <th className="px-4 py-3">
                    {ui.caseStudyLabels.tableProfile}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {commercialMatrix.plans.map((plan) => (
                  <tr key={plan.plan}>
                    <td className="px-4 py-3 font-medium text-primary">
                      {plan.plan}
                    </td>
                    <td className="px-4 py-3 font-mono text-secondary">
                      {plan.edition}
                    </td>
                    <td className="px-4 py-3 text-primary">{plan.status}</td>
                    <td className="px-4 py-3 text-secondary">{plan.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="grid gap-2.5 text-sm leading-6 text-secondary sm:grid-cols-2">
            {commercialMatrix.advantages.map((adv) => (
              <li
                key={adv}
                className="flex gap-2.5 rounded-lg border border-border-subtle bg-surface p-3.5 text-xs leading-5"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {visibleResults.length > 0 ? (
        <div
          className={`grid gap-4 ${
            visibleResults.length > 1 ? "sm:grid-cols-2" : ""
          }`}
        >
          {visibleResults.map((item, idx) => (
            <article
              key={idx}
              className={`rounded-xl border p-5 ${
                item.isPlaceholder
                  ? "border-dashed border-border-strong bg-subtle/30"
                  : "border-border-subtle bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-xs text-accent uppercase">
                  {item.category}
                </p>
                {item.isPlaceholder ? (
                  <Badge variant="placeholder">{ui.actions.pendingBadge}</Badge>
                ) : null}
              </div>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-primary">
                {item.title}
              </h3>
              {item.checklistRef ? (
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {item.checklistRef}
                </p>
              ) : null}
              <p className="mt-2.5 text-sm leading-6 text-secondary">
                <FormattedText text={item.detail} />
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
