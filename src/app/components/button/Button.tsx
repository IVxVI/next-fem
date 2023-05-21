import styles from './button.module.css';

type Button = {
  variant: string;
}

const Button = ({ variant }: Button) => {
  return <div className={styles.button}>Button</div>
}

export default Button;