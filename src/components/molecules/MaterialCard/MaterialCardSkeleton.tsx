// Skeleton shimmer yang meniru bentuk MaterialCard saat data masih dimuat.
export function MaterialCardSkeleton() {
  return (
    <div className="brutal flex flex-col p-5">
      <div className="flex items-center justify-between">
        <div className="shimmer h-6 w-16 bg-line/15" />
        <div className="shimmer h-4 w-20 bg-line/15" />
      </div>

      <div className="shimmer mt-3 h-6 w-3/4 bg-line/15" />

      <div className="mt-2 space-y-2">
        <div className="shimmer h-4 w-full bg-line/15" />
        <div className="shimmer h-4 w-5/6 bg-line/15" />
      </div>

      <div className="shimmer mt-4 h-4 w-14 bg-line/15" />
    </div>
  )
}
