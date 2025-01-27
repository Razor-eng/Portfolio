"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import TransitionEffect from "@/components/transition-effect";
import AnimatedText from "@/components/animated-text";
import { technologies } from "@/data/technologies";
import Image from "next/image";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FilterIcon } from "lucide-react";

const categories = Object.keys(technologies);

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [groupBy, setGroupBy] = useState<boolean>(false);
  const [skills, setSkills] = useState<
    { name: string; icon: string; link: string; level: number; category?: string }[]
  >([]);

  useEffect(() => {
    const flattenedSkills = Object.entries(technologies).flatMap(([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
      }))
    );
    setSkills(flattenedSkills);
  }, []);

  const filteredSkills = skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || skill.category === selectedCategory)
  );

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (skill.category && !acc[skill.category]) acc[skill.category] = [];
    if (skill.category) {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
    }
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <>
      <TransitionEffect />
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Skill Surpasses Potential!"
          className="!text-left lg:!text-5xl xl:!text-center md:!text-6xl sm:!text-5xl !text-3xl pr-8"
        />

        <AnimatePresence mode="sync">
          <div className="flex gap-2 md:gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="w-full flex items-center gap-1 md:gap-2 mt-5 px-1"
            >
              <Input
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:w-3/5"
              />
              <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
                <SelectTrigger className="hidden md:flex md:w-1/5">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="capitalize">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setGroupBy(value === "None" ? false : true)}>
                <SelectTrigger className="hidden md:flex md:w-1/5">
                  <SelectValue placeholder="Group By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Group By</SelectLabel>
                    <SelectItem value={"None"} className="capitalize">None</SelectItem>
                    <SelectItem value={"Category"} className="capitalize">Category</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Drawer>
                <DrawerTrigger asChild className="md:hidden">
                  <Button variant="outline">
                    <FilterIcon />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader className="mb-4">
                      <DrawerTitle>Filter Skills</DrawerTitle>
                      <DrawerDescription>You can use below to filter my skills.</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col gap-6 px-4 py-6">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-medium">Select Category</h3>
                        <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Category</SelectLabel>
                              <SelectItem value="all">All Categories</SelectItem>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category} className="capitalize">
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-medium">Group By</h3>
                        <Select onValueChange={(value) => setGroupBy(value === "None" ? false : true)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Group By" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Group By</SelectLabel>
                              <SelectItem value={"None"} className="capitalize">None</SelectItem>
                              <SelectItem value={"Category"} className="capitalize">Category</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Separator />
                    <DrawerFooter className="w-full">
                      <DrawerClose asChild>
                        <Button variant="secondary" className="w-full">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </motion.div>
          </div>
          {groupBy ? (
            Object.entries(groupedSkills).map(([category, skills]) => (
              <CategoryGroup key={category} category={category} skills={skills} />
            ))
          ) : filteredSkills.length > 0 ? (
            <div
              key="skills"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-5"
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} id={index} />
              ))}
            </div>
          ) : (
            <div
              key="no-results"
              className="text-center text-muted-foreground py-12"
            >
              No skills found. Try adjusting your search or filter.
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function CategoryGroup({ category, skills }: { category: string; skills: any[] }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6">
      <div
        className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 p-4 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold capitalize">{category}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-5 mt-4"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} id={index} />
          ))}
        </div>
      )}
    </div>
  );
}

function SkillCard({
  skill,
  id,
}: {
  skill: {
    name: string;
    icon: any;
    level: number;
  };
  id: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(skill.level);
  }, [skill.level]);

  const getProficiencyLabel = (level: number) => {
    if (level <= 40) return "Beginner";
    if (level < 80) return "Intermediate";
    return "Advanced";
  };

  const getProficiencyClasses = (level: number) => {
    if (level <= 40)
      return "bg-red-50 border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-800/30 dark:bg-red-800/30 dark:border-red-800 dark:text-red-500";
    if (level < 80)
      return "bg-yellow-50 hover:bg-yellow-50 hover:dark:bg-yellow-800/30 border-yellow-200 text-yellow-600 dark:bg-yellow-800/30 dark:border-yellow-800 dark:text-yellow-500";
    return "bg-green-50 hover:bg-green-50 border-green-200 text-green-600 dark:bg-green-800/30 hover:dark:bg-green-800/30 dark:border-green-800 dark:text-green-500";
  };

  const getProficiencyBarClasses = (level: number) => {
    if (level <= 40) return "bg-red-400 dark:bg-red-500";
    if (level < 80) return "bg-yellow-400 dark:bg-yellow-500";
    return "bg-green-400 dark:bg-green-500";
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: (id + 1) * 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm cursor-pointer transform hover:shadow-md hover:scale-102 transition-all relative"
    >
      <Badge className={`${getProficiencyClasses(skill.level)} z-20 absolute top-4 right-4`}>
        {getProficiencyLabel(skill.level)}
      </Badge>
      <div className="mb-4 flex justify-center items-center p-3 rounded-md bg-gray-100 dark:bg-gray-900 shadow-sm hover:scale-105 transition-all ease-in duration-300">
        <div className="relative w-12 h-12 rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
          )}
          <Image
            src={skill.icon}
            alt={skill.name}
            width={48}
            height={48}
            className={`object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onLoadingComplete={() => setIsLoading(false)}
            placeholder="blur"
            blurDataURL="/placeholder.svg"
          />
        </div>
      </div>
      <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 text-center">
        {skill.name}
      </h3>
      <div>
        <motion.div
          className={`inline-block mb-2 py-0.5 px-3 ${getProficiencyClasses(skill.level)} text-xs font-medium rounded-lg`}
          style={{ marginLeft: `${progress - 8}%` }}
          initial={{ marginLeft: `${0 - 5}%` }}
          animate={{ marginLeft: `${progress - 8}%` }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <span>{skill.level}%</span>
        </motion.div>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
          <div
            className={`absolute top-0 left-0 h-full ${getProficiencyBarClasses(skill.level)} text-xs text-white text-center whitespace-nowrap transition-all duration-500`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}