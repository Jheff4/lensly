"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const proposals = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const DropDown = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[12.5rem] max-xs:w-fit justify-between flex bg-mirage items-center gap-6 border p-2.5 rounded-[28px] border-solid border-stormGray text-alto text-sm font-semibold shrink-0"
        >
          {value
            ? proposals.find((proposal) => proposal.value === value)?.label
            : "All proposals"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-solid border-stormGray text-alto text-sm font-semibold bg-mirage">
        <Command>
          <CommandInput placeholder="Search proposals..." />
          <CommandEmpty>No proposal found.</CommandEmpty>
          <CommandGroup>
            {proposals.map((proposal) => (
              <CommandItem
                key={proposal.value}
                value={proposal.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === proposal.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {proposal.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default DropDown