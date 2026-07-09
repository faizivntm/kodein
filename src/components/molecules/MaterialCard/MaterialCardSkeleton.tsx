// Skeleton shimmer yang meniru bentuk MaterialCard saat data masih dimuat.
export function MaterialCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-line bg-tide/60 p-5">
      <div className="flex items-center justify-between">
        <div className="shimmer h-6 w-16 rounded-full bg-line/60" />
        <div className="shimmer h-4 w-20 rounded bg-line/60" />
      </div>

      <div className="shimmer mt-3 h-6 w-3/4 rounded bg-line/60" />

      <div className="mt-2 space-y-2">
        <div className="shimmer h-4 w-full rounded bg-line/60" />
        <div className="shimmer h-4 w-5/6 rounded bg-line/60" />
      </div>

      <div className="shimmer mt-4 h-4 w-14 rounded bg-line/60" />
    </div>
  )
}
