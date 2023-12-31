import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import Image from "next/image"

const Modal = ({ search, setSearch}: any) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image 
          src="/Search.svg"
          alt="search"
          width={20}
          height={20}
          className="md:hidden"
        />
      </DialogTrigger>
      <DialogContent className="w-fit rounded-lg">
        <DialogHeader>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              defaultValue=""
              placeholder="Search Proposal"
              className="col-span-4 bg-mirage text-white"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="items-center flex">
          <Button 
            className="bg-mirage w-fit text-white" 
            type="submit"
          >
            Search
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal