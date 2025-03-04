import Link from 'next/link';

interface AppIcon {
  name: string;
  path: string;
  icon: string;
}

const apps: AppIcon[] = [
  {
    name: 'Todo App',
    path: '/apps/todo',
    icon: '📝'
  },
  // More apps will be added here
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Apps</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {apps.map((app) => (
            <Link
              key={app.path}
              href={app.path}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
            >
              <span className="text-4xl mb-2">{app.icon}</span>
              <span className="text-white text-center">{app.name}</span>
            </Link>
          ))}
        </div>
        </div>
      </main>
  );
}
