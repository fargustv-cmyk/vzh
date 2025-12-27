"use client";

import { useState } from "react";
import data from "../app/data/data.json";
import Card from "./Card";
import StackCard from "./StackCard";

export default function Wallet() {
  const order = data.walletOrder;
  const [openStack, setOpenStack] = useState<string | null>(null);

  const toggleStack = (id: string) => {
    setOpenStack(openStack === id ? null : id);
  };

  return (
    <div className="space-y-[-120px] pt-10">
      {order.map((id, index) => {
        const project = data.projects[id];
        const stack = data.stacks[id];

        const depth = order.length - index;

        // Если стопка открыта — вычисляем её индекс
        const openIndex = openStack ? order.indexOf(openStack) : null;

        // Если карточка находится выше открытой стопки — поднимаем её
        const shiftUp =
          openIndex !== null && index < openIndex ? "-translate-y-10" : "";

        return (
          <div
            key={id}
            className={`relative transition-all duration-300 ${shiftUp}`}
            style={{
              zIndex: depth,
              opacity: 0.9 + index * 0.02
            }}
          >
            {/* Проект */}
            {project && (
              <Card
                title={project.title}
                logo={project.logo}
                color={project.cardColor}
              />
            )}

            {/* Стопка */}
            {stack && (
              <div onClick={() => toggleStack(id)} className="cursor-pointer">
                <StackCard
                  title={stack.title}
                  count={stack.count}
                  color={stack.cardColor}
                />

                {/* Раскрытие стопки */}
                {openStack === id && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    {stack.items.map((itemId) => {
                      const item = data.stackItems[itemId];
                      return (
                        <Card
                          key={itemId}
                          title={item.title}
                          logo={item.logo}
                          color={item.cardColor}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
