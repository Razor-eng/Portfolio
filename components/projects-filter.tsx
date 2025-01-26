"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { SortOption, GroupByOption } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { SlidersHorizontal, X } from "lucide-react"
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
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProjectsFilterProps {
    categories: string[]
    technologies: string[]
    onCategoryChange: (category: string | null) => void
    onTechnologiesChange: (technologies: string[]) => void
    onSortChange: (sort: SortOption) => void
    onGroupByChange: (groupBy: GroupByOption | null) => void
}

export function ProjectsFilter({
    categories,
    onCategoryChange,
    onTechnologiesChange,
    onSortChange,
    onGroupByChange,
}: ProjectsFilterProps) {
    const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [groupBy, setGroupBy] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<SortOption>("latest")

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIsMobile()
        window.addEventListener("resize", checkIsMobile)

        return () => window.removeEventListener("resize", checkIsMobile)
    }, [])

    const handleCategoryChange = (category: string | null) => {
        if (category === "all") category = null
        setSelectedCategory(category)
        onCategoryChange(category)
        if (isMobile) setIsOpen(false)
    }

    const clearFilters = () => {
        setSelectedTechnologies([])
        setSelectedCategory(null)
        setGroupBy(null)
        setSortBy("latest")
        onCategoryChange(null)
        onTechnologiesChange([])
        onSortChange("latest")
        onGroupByChange(null)
    }

    const MobileFilterContent = () => (
        <div className="space-y-6 px-2">
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
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium">Sort By</h3>
                <Select
                    onValueChange={(value) => {
                        onSortChange(value as SortOption)
                        setSortBy(value as SortOption)
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
            </div>

            <div className="space-y-4">
                <h3 className="text-sm font-medium">Group By</h3>
                <Select
                    onValueChange={(value) => {
                        onGroupByChange(value as GroupByOption | null)
                        setGroupBy(value)
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
    )

    const FilterContent = () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    );

    const MobileView = () => (
        <div className="mb-6">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size={"lg"} className="w-full py-6 gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filter & Sort
                        {(selectedCategory || selectedTechnologies.length > 0) && (
                            <Badge variant="secondary" className="ml-2">
                                {selectedTechnologies.length + (selectedCategory ? 1 : 0)}
                            </Badge>
                        )}
                    </Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                    <SheetHeader className="flex mt-3 flex-row items-center justify-between">
                        <SheetTitle>Filter Projects</SheetTitle>
                        <Button variant="destructive" size="sm" onClick={clearFilters}>
                            Clear All
                        </Button>
                    </SheetHeader>
                    <Separator className="my-4" />
                    <ScrollArea className="h-full pb-16">
                        <MobileFilterContent />
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    )

    const DesktopView = () => (
        <div
            className="mb-8 rounded-lg border p-4 shadow-lg bg-gradient-to-l from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
        >
            <FilterContent />
        </div >
    );

    return isMobile ? <MobileView /> : <DesktopView />
}

