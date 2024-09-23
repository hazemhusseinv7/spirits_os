"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

type accordionItemsType = {
  key: string;
  title: string;
  subtitle: string;
  content: string;
};

function Page() {
  const accordionItems: accordionItemsType[] = [
    {
      key: "1",
      title: "Accordion 1",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "2",
      title: "Accordion 2",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "3",
      title: "Accordion 3",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "4",
      title: "Accordion 4",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "5",
      title: "Accordion 5",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "6",
      title: "Accordion 6",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "7",
      title: "Accordion 7",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "8",
      title: "Accordion 8",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "9",
      title: "Accordion 9",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      key: "10",
      title: "Accordion 10",
      subtitle: "Lorem ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <main className="container m-auto p-8 lg:px-20 dark">
      <div className="flex flex-col items-start justify-center mb-12">
        <h2 className="font-bold text-7xl lg:text-9xl bg-gradient-to-r from-main-color-1 via-main-color-2 to-main-color-3 bg-clip-text text-transparent leading-[1.2] lg:leading-[1.4] mb-2">
          Page
        </h2>
        <span className="text-slate-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          perferendis dolorem rerum quos quisquam reiciendis, et provident,
          consectetur culpa aspernatur voluptatem. Fugit laudantium suscipit
          totam reprehenderit harum nobis ratione, placeat libero unde tenetur
          delectus doloribus mollitia impedit temporibus saepe ex dicta tempora
          ab quaerat incidunt necessitatibus natus! Vel accusamus harum
          voluptate, officia natus ullam, debitis veritatis, repellat libero
          illo modi a dolorum. At reprehenderit dolorum modi rerum atque est
          quibusdam veniam repellendus iusto facilis perferendis ipsa doloremque
          ipsam, minus beatae hic consequuntur! Sunt enim voluptate placeat!
          Quasi, dignissimos! Laboriosam voluptatum minima ducimus nobis
          temporibus repellendus ullam quas quis minus doloribus?
        </span>
      </div>

      <Accordion variant="splitted" defaultExpandedKeys={["1"]}>
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.key}
            aria-label={item.title}
            subtitle={item.subtitle}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

export default Page;
