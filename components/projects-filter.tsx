"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { SortOption, GroupByOption, CategoryOption } from "@/lib/types"
import { SlidersHorizontal } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

interface ProjectsFilterProps {
    categories: CategoryOption[];
    technologies: string[];
    onCategoryChange: (category: string | null) => void;
    onTechnologiesChange: (technologies: string[]) => void;
    onSortChange: (sort: SortOption) => void;
    onGroupByChange: (groupBy: GroupByOption | null) => void;
}

export function ProjectsFilter({
    categories,
    onCategoryChange,
    onSortChange,
    onGroupByChange,
}: ProjectsFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [groupBy, setGroupBy] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<SortOption>("latest");

    const handleCategoryChange = (category: CategoryOption | "all") => {
        const newCategory = category === "all" ? null : category
        setSelectedCategory(newCategory)
        onCategoryChange(newCategory)
    }

    const FilterContent = () => (
        <div>
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 rounded-lg border md:p-4 shadow-lg bg-gradient-to-l from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</h3>
                    <Select onValueChange={handleCategoryChange} value={selectedCategory || 'all'}>
                        <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel className="text-gray-500 dark:text-gray-400">Category</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort By</h3>
                    <Select
                        onValueChange={(value) => {
                            onSortChange(value as SortOption);
                            setSortBy(value as SortOption);
                        }}
                        value={sortBy}
                    >
                        <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select sort option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">Latest First</SelectItem>
                            <SelectItem value="alphabetical">Alphabetical</SelectItem>
                            <SelectItem value="complexity">Complexity</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Group By</h3>
                    <Select
                        onValueChange={(value) => {
                            onGroupByChange(value as GroupByOption | null);
                            setGroupBy(value);
                        }}
                        value={groupBy || 'none'}
                    >
                        <SelectTrigger className="w-full border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500">
                            <SelectValue placeholder="Select group by option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="category">Category</SelectItem>
                            <SelectItem value="techStack">Tech Stack</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Dialog>
                <DialogTrigger asChild className="md:hidden">
                    <Button variant="outline" size={"lg"} className="w-full py-6 flex items-center font-semibold text-base gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filter & Sort
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-between">
                        <DialogTitle>Filter Projects</DialogTitle>
                        <DialogDescription>You can use this to filter through projects</DialogDescription>
                    </DialogHeader>
                    <Separator className="my-4" />
                    <div className="h-full pb-16">
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">Category</h3>
                            <Select onValueChange={handleCategoryChange} value={selectedCategory || "all"}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="all">All</SelectItem>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <h3 className="text-sm font-medium">Sort By</h3>
                            <Select
                                onValueChange={(value) => {
                                    onSortChange(value as SortOption);
                                    setSortBy(value as SortOption);
                                }}
                                value={sortBy}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select sort option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="latest">Latest First</SelectItem>
                                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                                    <SelectItem value="complexity">Complexity</SelectItem>
                                </SelectContent>
                            </Select>

                            <h3 className="text-sm font-medium">Group By</h3>
                            <Select
                                onValueChange={(value) => {
                                    onGroupByChange(value as GroupByOption | null);
                                    setGroupBy(value);
                                }}
                                value={groupBy || "none"}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select group by option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="category">Category</SelectItem>
                                    <SelectItem value="techStack">Tech Stack</SelectItem>
                                    <SelectItem value="year">Year</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );

    return (
        <FilterContent />
    );
}
