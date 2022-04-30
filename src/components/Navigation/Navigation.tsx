import { FC } from 'react'

const Navigation: FC = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#" className=" is-active">
            чоловіки
          </a>
          <ul>
            <li>
              <a href="#">Футболки та шорти</a>
            </li>
            <li>
              <a href="#">Курточки та жилетки</a>
            </li>
            <li>
              <a href="#">Кофти, штани та костюми</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Жінки</a>
        </li>
        <li>
          <a href="#">діти</a>
        </li>
        <li>
          <a href="#">Лайфстайл</a>
        </li>
        <li>
          <a href="#">спорт</a>
        </li>
        <li>
          <a href="#">футбол</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
