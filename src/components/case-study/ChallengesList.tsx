import { Badge } from "@/components/ui/Badge";
import { FormattedText } from "@/components/ui/FormattedText";
import type { TechnicalChallenge, UiDictionary } from "@/content/types";

interface ChallengesListProps {
  ui: UiDictionary;
  challenges: TechnicalChallenge[];
}

export function ChallengesList({ ui, challenges }: ChallengesListProps) {
  return (
    <div className="space-y-4">
      {challenges.map((item, idx) => (
        <article
          key={idx}
          className={`rounded-xl border p-5 ${
            item.isPlaceholder
              ? "border-dashed border-border-strong bg-subtle/30"
              : "border-border-subtle bg-surface"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold tracking-tight text-primary">
              {item.title}
            </h3>
            {item.isPlaceholder ? (
              <Badge variant="placeholder">{ui.actions.pendingBadge}</Badge>
            ) : null}
          </div>

          <dl className="mt-4 space-y-3 text-sm leading-6">
            <div>
              <dt className="font-mono text-xs text-muted uppercase">
                {ui.caseStudyLabels.challengeProblem}
              </dt>
              <dd className="mt-1 text-secondary">
                <FormattedText text={item.problem} />
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted uppercase">
                {ui.caseStudyLabels.challengeApproach}
              </dt>
              <dd className="mt-1 text-secondary">
                <FormattedText text={item.approach} />
              </dd>
            </div>
            {item.tradeoff ? (
              <div>
                <dt className="font-mono text-xs text-muted uppercase">
                  {ui.caseStudyLabels.challengeTradeoff}
                </dt>
                <dd className="mt-1 text-secondary">
                  <FormattedText text={item.tradeoff} />
                </dd>
              </div>
            ) : null}
          </dl>
        </article>
      ))}
    </div>
  );
}
