import PaginationLayout from "@/components/layout-ui/PaginationLayout";
import ViewMobile from "@/components/views/ViewMobile";
import { ViewsForm } from "@/components/views/ViewsForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid md:grid-cols-1 lg:grid-cols-[22rem_1fr] px-6 lg:px-16 my-12 gap-12">
        <div className="hidden lg:block">
          <ViewsForm />
        </div>
        <main>{children}</main>
        <div className="lg:hidden block">
          <ViewMobile />
        </div>
      </div>
      <PaginationLayout />
    </>
  );
}
