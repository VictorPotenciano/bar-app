import { Skeleton } from "@/components/ui/skeleton";

const MenuSkeleton = () => {
  return (
    <section className="py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-8 w-32 mx-auto mb-4 bg-blue-900/50" />
          <Skeleton className="h-10 w-64 mx-auto mb-4 bg-blue-900/50" />
          <Skeleton className="h-1 w-20 mx-auto mb-6 bg-blue-500" />
          <Skeleton className="h-6 w-3/4 max-w-3xl mx-auto bg-blue-900/50" />
        </div>

        {/* Primeros platos Skeleton */}
        <div className="mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-6 bg-blue-900/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-4`}
              >
                <Skeleton className="md:w-1/3 h-40 rounded-lg bg-blue-900/50" />
                <div className="md:w-2/3 flex flex-col justify-center p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="w-6 h-6 rounded-full bg-blue-600" />
                    <Skeleton className="h-6 w-3/4 bg-blue-900/50" />
                  </div>
                  <Skeleton className="h-4 w-full bg-blue-900/50 mb-3" />
                  <div className="mb-2">
                    <Skeleton className="h-4 w-1/3 bg-blue-900/50 mb-1" />
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Skeleton
                          key={i}
                          className="h-6 w-20 bg-blue-900/20 border border-blue-700"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segundos platos Skeleton */}
        <div className="mb-10">
          <Skeleton className="h-8 w-48 mx-auto mb-6 bg-blue-900/50" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-4`}
              >
                <Skeleton className="md:w-1/3 h-40 rounded-lg bg-blue-900/50" />
                <div className="md:w-2/3 flex flex-col justify-center p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Skeleton className="w-6 h-6 rounded-full bg-blue-600" />
                    <Skeleton className="h-6 w-3/4 bg-blue-900/50" />
                  </div>
                  <Skeleton className="h-4 w-full bg-blue-900/50 mb-3" />
                  <div className="mb-2">
                    <Skeleton className="h-4 w-1/3 bg-blue-900/50 mb-1" />
                    <div className="flex flex-wrap gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Skeleton
                          key={i}
                          className="h-6 w-20 bg-blue-900/20 border border-blue-700"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bebidas y postres Skeleton */}
        <div className="mt-12 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-4 bg-blue-900/50" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 bg-blue-900/50" />
              <Skeleton className="h-4 w-40 bg-blue-900/50" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 bg-blue-900/50" />
              <Skeleton className="h-4 w-40 bg-blue-900/50" />
            </div>
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center mt-16">
          <Skeleton className="h-6 w-2/3 max-w-2xl mx-auto mb-6 bg-blue-900/50" />
          <Skeleton className="h-10 w-48 mx-auto bg-blue-900/50" />
        </div>
      </div>
    </section>
  );
};

export default MenuSkeleton;
