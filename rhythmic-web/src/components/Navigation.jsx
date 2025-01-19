import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <NavLink to="/">
          <li className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"/><path stroke-linecap="round" d="M12 15v3"/></g></svg>
            <span className="nav-text">Home</span>
          </li>
        </NavLink>
        <NavLink to="/artists">
          <li className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M17.5 20q-1.05 0-1.775-.725T15 17.5t.725-1.775T17.5 15q.2 0 .45.038t.55.162V10H22v2h-2v5.5q0 1.05-.725 1.775T17.5 20M11 12q-1.65 0-2.825-1.175T7 8t1.175-2.825T11 4t2.825 1.175T15 8t-1.175 2.825T11 12m-8 8v-2.8q0-.875.438-1.575T4.6 14.55q1.55-.775 3.15-1.162T11 13q1.05 0 2.088.163t2.087.487q-1.65 1-2.05 2.863t.65 3.487z"/></svg>
            <span className="nav-text">Artist</span>
          </li>
        </NavLink>
        <NavLink to="/albums">
          <li className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M17.29 11.969a1.33 1.33 0 0 1-1.322 1.337a1.33 1.33 0 0 1-1.323-1.337a1.33 1.33 0 0 1 1.323-1.338c.73 0 1.323.599 1.323 1.338"/><path fill="currentColor" fill-rule="evenodd" d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12c-.877.125-1.608.393-2.152 1.02c-.543.628-.71 1.397-.716 2.293c-.006.866.139 1.962.319 3.329l.365 2.771c.141 1.069.255 1.933.432 2.61c.185.704.457 1.289.968 1.741s1.12.648 1.834.74C7.605 22 8.468 22 9.533 22h4.934c1.065 0 1.928 0 2.615-.088c.715-.092 1.323-.288 1.834-.74s.783-1.037.968-1.741c.177-.677.291-1.542.432-2.61l.365-2.771c.18-1.367.325-2.463.319-3.33c-.007-.895-.172-1.664-.716-2.291c-.544-.628-1.275-.896-2.152-1.021M6.052 8.732c-.726.104-1.094.292-1.34.578c-.248.285-.384.678-.39 1.42c-.005.762.126 1.765.315 3.195l.05.38l.371-.273c.96-.702 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.138c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.496.171-1.105.273-1.876l.352-2.675c.189-1.43.32-2.433.314-3.195c-.005-.742-.141-1.135-.388-1.42c-.247-.286-.615-.474-1.342-.578c-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107" clip-rule="evenodd"/><path fill="currentColor" d="M8.859 2h6.282c.21 0 .37 0 .51.015a2.62 2.62 0 0 1 2.159 1.672H6.19a2.62 2.62 0 0 1 2.159-1.672c.14-.015.3-.015.51-.015M6.88 4.5c-1.252 0-2.278.84-2.62 1.954l-.021.07c.358-.12.73-.2 1.108-.253c.973-.139 2.202-.139 3.629-.139h6.203c1.427 0 2.656 0 3.628.139c.378.053.75.132 1.11.253l-.021-.07C19.553 5.34 18.527 4.5 17.276 4.5z"/></svg>
            <span className="nav-text">Album</span>
          </li>
        </NavLink>
      </ul>
      <div>
        <ul className="nav-links">
          <NavLink to="/favorites">
            <li className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"/></svg>
              <span className="nav-text">Favourite</span>
            </li>
          </NavLink>
          <NavLink to="/recently-plays">
            <li className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2040 2040"><rect width="2048" height="2048" fill="none"/><path fill="currentColor" d="M1024 2048q-142 0-272-36t-245-103t-207-160t-160-208t-103-245t-37-272q0-141 36-272t103-245t160-207t208-160T752 37t272-37q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 142-36 272t-103 245t-160 207t-208 160t-245 103t-272 37m0-1920q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32m0 896V384H896v768h512v-128z"/></svg>
              <span className="nav-text">Recently plays</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="playlist">
        <p>Playlist</p>
        <NavLink to="/create-playlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8H5m0 4h9m-3 4H5m10 0h6m-3-3v6"/></svg>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation