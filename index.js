import styles, { nav, link, subNav, subLink } from './styles.css';
import { Link } from 'react-router';
import classNames from 'classnames';
import Drawer from 'react-drawer';
import kebab from 'lodash/kebabCase';

export default ({links=[], className=""}) => (
  <nav className={classNames(nav, className)}>
  {links.map( ({href="", text="", children },i) =>
    <Drawer key={`navlink${i}`}>{
      href
      ? <Link className={link} to={href} trigger>{text}</Link>
      : <span className={link} trigger>{text}</span>
    } {
      children
      ? <ul className={classNames(subNav, styles[ `subNav-${ kebab(text) }`])} target>
        {children.map( ({text, href="", xhref=""}, i) =>
          <li key={`subLink${i}`}>
            {href
             ? <Link className={subLink} to={href}>{text}</Link>
             : <a className={subLink} href={xhref}>{text}</a>}
          </li>
        )}
      </ul>
      : ''
    }
    </Drawer>)}
  </nav>
);
