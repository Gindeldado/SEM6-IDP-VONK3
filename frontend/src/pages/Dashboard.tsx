import Header from "../components/Header";

export default function Dashboard_appsmith() {
  return (
    <div>
      <Header />
      <div className="h-screen px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-[#5F7447]">Dashboard</h1>
        <iframe
          src="http://145.24.222.46/app/groenehub/page1-683f0811c106826653b531fd/?embed=true"
          className="rounded-lg border border-zinc-300 h-[calc(100vh-160px)] w-full"
        />
      </div>
    </div>
  );
}


