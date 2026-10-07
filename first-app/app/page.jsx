import Image from "next/image";

function MainPage() {
  return (
    <main className="p-10">
      <p>This is main components</p>

      <Image src="/image.png" alt="hero image"
        width={650}
        height={150}
      />   
      
       <Image src="https://images.unsplash.com/photo-1790014415640-b937789152ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero image"
        width={650}
        height={150}
      />  
      <Image src="https://res.cloudinary.com/dfifffuai/image/upload/v1791385624/courses/iwtpqmgt4cqvux3zwly9.jpg" alt="hero image"
        width={650}
        height={150}
      />
    </main>
  )
}

export default MainPage;