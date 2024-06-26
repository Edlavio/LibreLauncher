import { Link, useLocation } from "react-router-dom";
import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6"
import { Home, LayoutGrid, Download, Settings } from "lucide-react"

export const Aside = () => {
  const location = useLocation();
  const menu = [
    { icon: <Home size={20} />, label: "Home", path: "/"},
    { icon: <LayoutGrid size={20} />, label: "Catálogo", path: "/Catalog"},
    { icon: <Download size={20} />, label: "Downloads", path: "/Downloads"},
    { icon: <Settings size={20} />, label: "Configurações", path: "/Settings"},
  ]

  const social = [
    { icon: <FaXTwitter size={16} />, label: "Twitter", path: "https://twitter.com/"},
    { icon: <FaDiscord size={16} />, label: "Discord", path: "https://discord.com/"},
    { icon: <FaGithub size={16} />, label: "Github", path: "https://github.com"},
  ]

  return (
    <aside className="flex-[2] p-4 w-full min-h-screen space-y-12 border-r-2 border-neutral-800">
      <h1 className="text-xl font-black mt-3">
      <Link to="/">LibreLauncher</Link>
      </h1>

      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={`flex items-cente gap-2 cursor-pointer transition-all ${location.pathname === item.path ? 'font-bold' : ''}`}>
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="space-y-2">
        <h2 className="text-sm font-black">MINHA BIBLIOTECA</h2>
        <input 
          type="text" 
          placeholder="Filtrar biblioteca" 
          className="bg-neutral-800 w-full text-sm outline-none p-2 rounded-md border-2 border-neutral-700 focus:ring-0 focus:ring-offset-0 focus:outline-none"
        />
      </div>

      {
        /*<ul className="flex items-center space-x-3">
          <p className="text-sm">Acompanhe-nos</p>
          {social.map((social, index)=>(
            <li key={index}>
              <a href={social.path}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>*/
      }
    </aside>
  )
}
