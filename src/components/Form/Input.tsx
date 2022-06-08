import classNames from 'classnames'
import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  MutableRefObject,
  PointerEvent,
  useEffect,
  useId,
  useState,
} from 'react'
import { useIMask } from 'react-imask'
// import { UID } from '../../../assets/scripts/helpers'
// import { ErrorMessages } from '../../../assets/scripts/validation'

const maskOpts = {
  mask: '+{38\\0}(00)000-00-00',
}

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hasError?: boolean
  errorMessage?: string | null
  value?: string | number
  onCustomChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onCustomFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onCustomBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const Input: FC<IInput> = props => {
  const {
    className,
    value: inputValue = '',
    type,
    children,
    label,
    hasError,
    // errorMessage = ErrorMessages.EMPTY,
    errorMessage = '',
    onCustomChange,
    onCustomFocus,
    onCustomBlur,
    ...attrs
  } = props

  // const [value, setValue] = useState<string | number>(inputValue)
  const [hasFocus, setFocus] = useState<boolean>(false)
  const uid = useId()

  console.log({ type })
  

  const { maskRef, value, setValue, unmaskedValue, setUnmaskedValue, typedValue, setTypedValue } =
    useIMask(maskOpts)
  const phoneRef = useIMask(maskOpts).ref as MutableRefObject<HTMLInputElement>

  // useEffect(() => {
  //   setValue(inputValue)
  // }, [inputValue])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCustomChange?.(e)
    setValue(e.target.value)

    console.log(e.target.value)
  }

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    onCustomFocus?.(e)
    setFocus(true)
  }

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    onCustomBlur?.(e)
    setFocus(false)
  }

  const onClearButtonClick = (e: PointerEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setValue('')
  }

  return (
    // <div className="input-field">
    //   <input
    //     className={classNames('validate', className, { invalid: hasError })}
    //     id={uid}
    //     value={value}
    //     onChange={onChange}
    //     onFocus={onFocus}
    //     onBlur={onBlur}
    //     {...attrs}
    //   />
    //   <label htmlFor={uid} className={classNames({ active: !!value || hasFocus })}>
    //     {label}
    //   </label>
    //   {hasError && errorMessage ? (
    //     <small className="helper-text invalid">{errorMessage}</small>
    //   ) : (
    //     ''
    //   )}
    // </div>

    <div
      className={classNames(
        'input',
        { 'has-focus': hasFocus, 'has-text': value.toString().trim() !== '' },
        className
      )}
    >
      <button
        className="input__btn"
        type="button"
        aria-label="Clear input"
        onClick={onClearButtonClick}
      >
        <svg viewBox="0 0 47.971 47.971" className="icon icon-close" width="1.000em" height="1em">
          <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
        </svg>
      </button>
      <input
        id={uid}
        // value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={phoneRef}
        {...attrs}
      />
    </div>
  )
}

export default Input
