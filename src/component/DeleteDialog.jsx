"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

import { FaDeleteLeft } from "react-icons/fa6";

export function DeleteDialog({destinations}) {
    const {_id, destinationName}=destinations;

    const handleDelte = async()=>{
        const res = await fetch(`http://localhost:5000/destination/${_id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        });
        const data = await res.json();
        redirect("/destinations")
    }
  return (
    <AlertDialog>
      <Button variant="outline" className={"rounded-md text-red-500"}> <FaDeleteLeft/> Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="max-w-96">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelte} slot="close" variant="danger">
                confram Delte
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}