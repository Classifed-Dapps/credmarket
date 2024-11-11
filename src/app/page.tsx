import { homePageLists } from "@/lib/constant";

export default function Home() {
  return (
    <div className="flex flex-col px-8 lg:px-32 justify-center w-full">
      <div className=" font-inter my-12  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homePageLists.map((homeList) => (
          <div
            key={homeList.id}
            className="border border-secondary-1 bg-current-200/5 rounded-2xl w-full"
          >
            <div className="flex flex-col ">
              <div className="bg-current-100 rounded-t-xl ">
                <h1 className="font-[700] text-2xl  text-primary-1 text-center py-2">
                  {homeList.title}
                </h1>
              </div>

              <div className="flex flex-col p-4 gap-3  h-full">
                {homeList.lists.map((list) => (
                  <p
                    className="text-current-100 underline text-lg font-[400]"
                    key={list}
                  >
                    {list}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
