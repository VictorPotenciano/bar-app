import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCategoriesDishes = () => {
  return (
    <main className="py-20 bg-gray-900 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Skeleton className="h-10 w-1/3 bg-gray-700 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 bg-gray-600 mx-auto" />
        </div>
        <div className="space-y-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="mb-12">
              <div className="flex items-center w-full mb-6">
                <Skeleton className="h-8 w-1/4 bg-blue-900/50 mr-4" />
                <Skeleton className="h-4 w-16 bg-gray-600" />
                <div className="flex-1 h-px bg-blue-900/50 mx-4"></div>
                <Skeleton className="h-5 w-5 bg-gray-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(4)].map((_, j) => (
                  <div
                    key={j}
                    className="bg-[#1e293b] rounded-xl overflow-hidden border border-blue-900/30"
                  >
                    <Skeleton className="h-60 w-full bg-gray-700" />
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-6 w-3/4 bg-gray-600" />
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {[...Array(3)].map((_, k) => (
                          <Skeleton
                            key={k}
                            className="h-5 w-16 bg-blue-900/40 rounded-full"
                          />
                        ))}
                      </div>
                      <Skeleton className="h-4 w-full bg-gray-600 mb-2" />
                      <Skeleton className="h-4 w-2/3 bg-gray-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkeletonCategoriesDishes;
