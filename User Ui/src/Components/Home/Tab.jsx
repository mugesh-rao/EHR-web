import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsComponent() {
  const [categories] = useState({
    Recent: [{ id: 1 }, { id: 2 }],
    Popular: [{ id: 1 }, { id: 2 }],
    Trending: [{ id: 1 }, { id: 2 }],
    Baller: [{ id: 1 }, { id: 2 }],
    Cotton: [{ id: 1 }, { id: 2 }],
  });

  return (
    <div className="flex flex-col flex-grow mx-1 sm:mx-6 px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-gray-900/20">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-slate-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-slate-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>{/* Render your posts here */}</ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
