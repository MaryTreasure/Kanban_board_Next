'use client'

import HomeTitle from "@/entities/HomeTitle/HomeTitle";
import { IDND } from "@/shared/types";
import { UniqueIdentifier } from "@dnd-kit/core";
import React, { useState } from "react";

const HomePage = () => {
  const [containers, setContainers] = useState<IDND[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentContainerId, setCurrentContainerId] =
    useState<UniqueIdentifier>();
  const [itemName, setItemName] = useState("");
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  return (
    <>
    <HomeTitle title={'Home Title'}/>
    </>
  );
};

export default HomePage;
