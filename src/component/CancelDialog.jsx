"use client";

import {AlertDialog, Button} from "@heroui/react";
import { FiDelete } from "react-icons/fi";

export function CancelDialog({bookingId}) {
const handleDelte=async()=>{
  const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
    method:"DELETE",
    headers:{
      "content-type":"application/json"
    },
    
  })
  const data = await res.json();
  // console.log(data);
  window.location.reload()
  
}

  return (
    <AlertDialog>
       <Button className={"bg-danger text-white rounded-none"} variant='outline'><FiDelete/> cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelte} slot="close" variant="danger">
                Confram Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}