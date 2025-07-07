

const Conversation =()=>{
  return(
    <>
      <div className="flex gap-3 items-center hover:bg-sky-500 rounded cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
          <p className="text-white fond-">John Doe</p>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </>
  )
}

export default Conversation