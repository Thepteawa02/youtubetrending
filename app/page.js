import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <img src="/images/moreoptions.png" width={20} style={{ marginRight: "25px" }} />
              <img src="/images/youtube.png" width={90} />
            </li>
            <li style={{ marginTop: "30px" }}>
              <button>
                <img src="/images/home.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Home
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/shorts.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Shorts
              </button>
            </li>
            <li style={{ marginTop: "10px", borderBottom: "1px gray solid", paddingBottom: "20px" }}>
              <button>
                <img src="/images/subscribe.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Subscriptions
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <b>You <img src="/images/rightarrow.png" width={11} style={{ marginLeft: "10px" }} /></b>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/history.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                History
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/watchlater.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Watch later
              </button>
            </li>
            <li style={{ marginTop: "10px", borderBottom: "1px gray solid", paddingBottom: "20px" }}>
              <button>
                <img src="/images/like.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Liked videos
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <b>Explore</b>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button style={{ backgroundColor: "#3E3E3E", width: "90%", height: "30px", borderRadius: "8px", textAlign: "left" }}>
                <img src="/images/trending2.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Trending
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/music.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Music
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/gaming.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Gaming
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/news.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                News
              </button>
            </li>
            <li style={{ marginTop: "10px", borderBottom: "1px gray solid", paddingBottom: "20px" }}>
              <button>
                <img src="/images/sport.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Sports
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <b>More from YouTube</b>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/youtubepremium.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                YouTube Premium
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/youtubemusic.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                YouTube Music
              </button>
            </li>
            <li style={{ marginTop: "10px", borderBottom: "1px gray solid", paddingBottom: "20px" }}>
              <button>
                <img src="/images/youtubekids.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                YouTube Kids
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/setting.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Setting
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/report.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Report history
              </button>
            </li>
            <li style={{ marginTop: "10px" }}>
              <button>
                <img src="/images/help.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                help
              </button>
            </li>
            <li style={{ marginTop: "10px", borderBottom: "1px gray solid", paddingBottom: "20px" }}>
              <button>
                <img src="/images/comment.png" width={20} style={{ marginRight: "20px", verticalAlign: "middle" }} />
                Send feedback
              </button>
            </li>
          </ul>
        </div>
        <div class="search">
          <input type="text" placeholder="Search" style={{ verticalAlign: "middle" }} />
          <button class="searchsubmit"><img src="/images/search.png" width={20} style={{ verticalAlign: "middle" }} /></button>
          <button class="mic" style={{ marginLeft: "15px" }}><img src="/images/mic.png" width={20} style={{ verticalAlign: "middle" }} /></button>
        </div>
        <div class="profile">
          <button class="noborder" style={{ marginRight: "10%" }}><img src="/images/createvideo.png" width={25} style={{ verticalAlign: "middle" }} /></button>
          <button class="noborder" style={{ marginRight: "10%" }}><img src="/images/notification.png" width={25} style={{ verticalAlign: "middle" }} /></button>
          <button class="acount" ><img src="/images/profile.png" width={35} style={{ verticalAlign: "middle" }} /></button>
        </div>
      </div>
      <div class="main">
        <div class="topic" >
          <p>
            <img src="/images/trending1.png" width={65} style={{ verticalAlign: "middle" }} />
            <b style={{ fontSize: "36px", paddingLeft: "18px", verticalAlign: "middle" }}>Trending</b>
          </p>
          <button class="type_selected"><b>Now</b></button>
          <button class="type" style={{ marginLeft: "20px" }}><b>Music</b></button>
          <button class="type" style={{ marginLeft: "20px" }}><b>Gaming</b></button>
          <button class="type" style={{ marginLeft: "20px" }}><b>Movies</b></button>
        </div>
        <div class="video" >
          <img src="/images/clip1.png" width={250} />
          <img src="/images/clip2.png" width={250} />
          <img src="/images/clip3.png" width={250} />
          <img src="/images/clip4.png" width={250} />
          <img src="/images/clip5.png" width={250} />
        </div>
        <div class="discription" style={{ height: "140px" }}>
          <p style={{ fontSize: "13px" }}>
            การแข่งขัน RoV Pro League 2024 Summer | รอบ Regular Season วัน<br />สุดท้าย
          </p>
          <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
            Garena Rov Thailand <img src="/images/verify.png" width={9} /> 1M views・Streamed 20 hours ago
          </p>
          <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
            การแข่งขัน Rov Pro League 2024 Summer🏆 วันสุดท้ายของรอบ Regular Season(เก็บคะแนน)🏆งานออฟไลน์<br />รอ...
          </p>
        </div>
        <div class="discription" style={{ height: "140px" }}>
          <p style={{ fontSize: "13px" }}>
            สวยขยี้ใจ - บ่าวบุ๊ค x ทิดแอม x คำมอส #อัลบั้มละไว้ในฐานที่เข้าใจ<br /> [OFFICIAL MV]
          </p>
          <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
            บังเอิญ มิวสิค・3.6M views・3 days ago
          </p>
          <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
            เพลง : สวยขยี้ใจ ศิลปิน : บุ๊ค ศุภกาญจน์,ทิดแอม,มอส คำหมากบิน คำร้อง/ทำนอง...
          </p>
        </div>
        <div class="discription" style={{ height: "140px" }}>
          <p style={{ fontSize: "13px" }}>
            ผม vs แฟนตอนไปทะเล 😂😂
          </p>
          <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
            Eoirndaime <img src="/images/verify.png" width={9} /> 498K views・2 days ago
          </p>
        </div>
        <div class="discription" style={{ height: "140px" }}>
          <p style={{ fontSize: "13px" }}>
            Girl Are Strong Too 💪
          </p>
          <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
            Alan Chikin Chow <img src="/images/verify.png" width={9} /> 4.2 views・22 hours ago
          </p>
          <p style={{ fontSize: "8.5px", color: "#b2b2b2" }}>
            Hey Heroes, this is Alan Chikin Chow! Thanks for watching my video 😍 #Shorts 📩CONNECT WITH ME: IG:<br />
            https://www.instagram.com/alanchikinchow EMAIL:alan@alanchikinchow.com
          </p>
        </div>
        <div class="discription" style={{ height: "140px" }}>
          <p style={{ fontSize: "13px" }}>
            ฟังสดเดอะโกสเรดิโอ 24/3/2567 เรื่องเล่าผีเดอะโกส
          </p>
          <p style={{ fontSize: "9.5px", color: "#b2b2b2" }}>
            TheghostradioOfficial <img src="/images/verify.png" width={9} /> 495K views・Streamed 11 hours ago
          </p>
          <p style={{ fontSize: "9px", color: "#b2b2b2" }}>
            00:00:00 เปิดรายการ 28:49 สายที่ 1 คุณอ๊อด - ผีริมคลอง 50:45 สายที่ 2 คุณเอ - ผีห่าก้อมลิ...
          </p>
        </div>
      </div>
    </body>
  );
}