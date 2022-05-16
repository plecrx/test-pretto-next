import {css} from 'styled-components'

const WEIGHT = {
	book: 400,
	medium: 500,
	bold: 700,
	black: 900,
}

const FONT_FAMILY = css`
	font-family: ${({theme}) => theme.font};
`

export const button18 = css`
	${FONT_FAMILY}
	font-size: 18px;
	line-height: 24px;
	font-weight: ${WEIGHT.bold};
`

export const link12 = css`
	${FONT_FAMILY}
	font-size: 12px;
	line-height: 16px;
	font-weight: ${WEIGHT.medium};
	letter-spacing: 0.05em;
	text-transform: uppercase;
`

export const linkUnderline12 = css`
	${FONT_FAMILY}
	font-size: 12px;
	line-height: 16px;
	font-weight: ${WEIGHT.medium};
	letter-spacing: 0.05em;
	text-transform: uppercase;
	text-decoration-line: underline;
`

export const inputBook16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 32px;
	font-weight: ${WEIGHT.book};
`

export const heading64 = css`
	${FONT_FAMILY}
	font-size: 64px;
	line-height: 72px;
	font-weight: ${WEIGHT.black};
`

export const heading48 = css`
	${FONT_FAMILY}
	font-size: 48px;
	line-height: 56px;
	font-weight: ${WEIGHT.black};
`

export const heading32 = css`
	${FONT_FAMILY}
	font-size: 32px;
	line-height: 40px;
	font-weight: ${WEIGHT.black};
	letter-spacing: -0.025em;
`

export const heading16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.black};
	letter-spacing: -0.025em;
`

export const headline16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.medium};
	text-transform: uppercase;
	letter-spacing: 0.05em;
`

export const numbers32 = css`
	${FONT_FAMILY}
	font-size: 32px;
	line-height: 40px;
	font-weight: ${WEIGHT.black};
`

export const textBig40 = css`
	${FONT_FAMILY}
	font-size: 40px;
	line-height: 56px;
	font-weight: ${WEIGHT.medium};
`

export const textLarge24 = css`
	${FONT_FAMILY}
	font-size: 24px;
	line-height: 32px;
	font-weight: ${WEIGHT.medium};
`

export const bodyBlack = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.black};
`

export const bodyBold16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.bold};
`

export const bodyMedium16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.medium};
`

export const bodyBook16 = css`
	${FONT_FAMILY}
	font-size: 16px;
	line-height: 24px;
	font-weight: ${WEIGHT.book};
`

export const caption12 = css`
	${FONT_FAMILY}
	font-size: 12px;
	line-height: 16px;
	font-weight: ${WEIGHT.book};
`
