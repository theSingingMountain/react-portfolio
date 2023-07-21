export default function Info(){
    return (
        <info className="info">
            <div className="info--intro">
                <img src="../src/assets/photo.JPG" width="317px" height="317px" id="photo"/>
                <p className="name">Karthik Chelakkara Murugan</p>
                <p className="designation">Web Developer</p>
                <></>
            </div>
            <div className="info--call-to-action">
                <a href="mailto:karthikcm5329@gmail.com" id="mail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    Email
                </a>
                <a href="tel:+919019478704" id="phno">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                    </svg>
                    Call
                </a>
            </div>
        </info>
    )
}