import type { Metadata } from 'next';
import { ArrowRight, MapPin, Calendar, User } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deployment Stories | LvSG Community',
  description:
    'First-person accounts from Grey Sky Responders — the human side of disaster response, told by the people who were there.',
};

const stories = [
  {
    id: 'story-01',
    responder: 'Marcus T.',
    role: 'Housing Operations Specialist',
    deployment: 'Hurricane Helene — Florida',
    month: 'October 2024',
    excerpt:
      "I got the call on a Wednesday. By Friday I was checking into a hotel in Gainesville with a case file folder, a deployment vest, and no real idea what the next three months would look like. What I found was chaos that slowly became coordination — and a team of people from across the country who showed up and did the work.\n\nThe hardest part wasn't the volume of cases. It was sitting across the table from a 68-year-old woman who had lived in the same house for forty years, and telling her it was going to be a while. You don't train for that. You just learn to hold it and keep moving.",
    tags: ['Housing', 'Florida', 'Long Deployment'],
  },
  {
    id: 'story-02',
    responder: 'Sarah K.',
    role: 'Planning Section Coordinator',
    deployment: 'Hurricane Milton — Florida SERT',
    month: 'November 2024',
    excerpt:
      'Most people don\'t realize what it means to have two concurrent presidentially declared disasters. We had Helene still running hot when Milton hit. The Planning Section had to track two mission sets, two resource pools, and two timelines — simultaneously — while the Operations floor was standing up an entirely new IAP cycle.\n\nI remember the Incident Commander looking at the board during morning briefing and saying, "There is no playbook for this. We are writing it right now." That\'s the best description of what emergency management actually is.',
    tags: ['IMT', 'Planning', 'Florida SERT'],
  },
  {
    id: 'story-03',
    responder: 'James R.',
    role: 'Long-Term Recovery Advisor',
    deployment: 'Western Kentucky Tornado Recovery',
    month: 'March 2022',
    excerpt:
      "I spent eighteen months in western Kentucky, and the thing that will stay with me isn't the damage — it's the people who stayed. The ones who chose to rebuild, chose to fight, chose to believe their community was worth saving even when the federal dollars moved slow and the paperwork never ended.\n\nOur job was to help them navigate a system that wasn't built for their speed. Some days that felt impossibly frustrating. Other days a family got their construction authorization approved and you watched them call their kids to say they were coming home. That's the work.",
    tags: ['Long-Term Recovery', 'CDBG-DR', 'Kentucky'],
  },
];

export default function DeploymentStoriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-command-navy px-4 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 h-0.5 w-16 bg-signal-gold" />
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal-gold">
            From the Field
          </p>
          <h1 className="font-display text-3xl font-bold text-clean-white md:text-4xl">
            Deployment Stories
          </h1>
          <p className="mt-4 text-base text-medium-gray">
            First-person accounts from Grey Sky Responders — the people who deploy when others
            evacuate. These are their stories, told in their words.
          </p>
        </div>
      </section>

      {/* Context banner */}
      <section className="border-b border-operational-steel bg-dark-charcoal px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="border-l-2 border-signal-gold pl-6">
            <p className="text-sm leading-relaxed text-medium-gray">
              The Grey Sky Responder community is built on one principle: when the event hits, you
              go. These stories capture what that means in practice — the operational realities,
              human moments, and hard-won lessons from the field. Names are used with permission;
              some details are lightly edited for operational security.
            </p>
          </div>
        </div>
      </section>

      {/* Story Cards */}
      <section className="bg-command-navy px-4 py-14">
        <div className="mx-auto max-w-4xl space-y-10">
          {stories.map((story) => (
            <article key={story.id} className="border border-operational-steel bg-steel-blue/10">
              {/* Card Header */}
              <div className="border-b border-operational-steel bg-steel-blue/20 px-6 py-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-signal-gold/40 bg-command-navy">
                      <User className="h-5 w-5 text-signal-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-clean-white">{story.responder}</p>
                      <p className="font-mono text-xs text-signal-gold">{story.role}</p>
                    </div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="flex items-center justify-end gap-2 text-medium-gray">
                      <MapPin className="h-3.5 w-3.5" />
                      <span className="text-sm">{story.deployment}</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-medium-gray">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-mono text-xs">{story.month}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story body */}
              <div className="p-6">
                {story.excerpt.split('\n\n').map((para, i) => (
                  <p
                    key={i}
                    className={`text-sm leading-loose text-medium-gray ${i > 0 ? 'mt-4' : ''}`}
                  >
                    {para}
                  </p>
                ))}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-operational-steel bg-command-navy/60 px-3 py-1 font-mono text-xs text-medium-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/community/deployment-stories/${story.id}`}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-signal-gold transition-colors hover:text-warm-gold-light"
                  >
                    Read Full Story
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="bg-signal-gold px-4 py-14 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-command-navy">
            Grey Sky Community
          </p>
          <h2 className="font-display text-2xl font-bold text-command-navy md:text-3xl">
            Share Your Story
          </h2>
          <p className="mt-4 text-sm text-command-navy/80">
            If you have deployed with LvSG or as a Grey Sky Responder and have a story worth
            telling, we want to hear it. These accounts matter — for the community, for new
            responders, and for the public understanding of what disaster response actually
            requires.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-command-navy px-8 py-3 font-semibold text-clean-white transition-opacity hover:opacity-90"
            >
              Share Your Story
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/community"
              className="border border-command-navy px-8 py-3 font-semibold text-command-navy transition-colors hover:bg-command-navy/10"
            >
              Grey Sky Community
            </Link>
          </div>
        </div>
      </section>

      {/* Join the network */}
      <section className="bg-dark-charcoal px-4 py-10 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-medium-gray">
            Not yet a registered Grey Sky Responder?{' '}
            <Link
              href="/community/grey-sky"
              className="inline-flex items-center gap-1 text-signal-gold hover:text-warm-gold-light"
            >
              Learn about joining the registry
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
