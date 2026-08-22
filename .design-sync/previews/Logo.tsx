import { Logo } from '@digiall/ui'

export const StackedLockup = () => (
  <div className="p-10">
    <Logo variant="stacked" width={320} />
  </div>
)

export const WithRule = () => (
  <div className="p-10">
    <Logo variant="stacked" withRule width={320} />
  </div>
)

export const Inverse = () => (
  <div className="bg-plum-950 p-10">
    <Logo variant="stacked" tone="inverse" width={320} />
  </div>
)

export const Horizontal = () => (
  <div className="p-10">
    <Logo variant="horizontal" width={400} />
  </div>
)

export const Reductions = () => (
  <div className="flex flex-wrap items-end gap-10 p-10">
    <Logo variant="wordmark" width={220} />
    <Logo variant="monogram" width={72} />
    {/* The inverse monogram is white-on-plum: it only reads against a dark tile. */}
    <div className="rounded-xl bg-plum-950 p-4">
      <Logo variant="monogram" tone="inverse" width={72} />
    </div>
  </div>
)

export const OneInk = () => (
  <div className="p-10">
    <Logo variant="wordmark" tone="black" width={260} />
  </div>
)
