import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#" className="text-lg font-bold hover:text-gray-300">Dashboard</a>
          <a href="#" className="hover:text-gray-300">Projects</a>
          <a href="#" className="hover:text-gray-300">Tasks</a>
          <a href="#" className="hover:text-gray-300">Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome, User!</h1>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 mr-4"
            />
            <Button>New Project</Button>
          </div>
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">45</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">8</p>
            </CardContent>
          </Card>
        </section>

        {/* Task/Project List */}
        <section>
          <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Project Card */}
            <Card>
              <CardHeader>
                <CardTitle>Project Alpha</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Deadline: Dec 10, 2024</p>
              </CardContent>
              <CardFooter>
                <Button>View Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Beta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Deadline: Jan 5, 2025</p>
              </CardContent>
              <CardFooter>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        {/* <section>
        <figure><embed src="https://wakatime.com/share/@78d93dfb-c576-4f37-b89e-04a6454c1dff/34f3073f-f326-40a9-8718-902c6b073dc8.svg"></embed></figure>
        </section> */}
      </main>
    </div>
  );
};

export default Dashboard;
