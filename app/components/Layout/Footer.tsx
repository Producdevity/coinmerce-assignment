function Footer() {
  return (
    <div className="bottom-0 flex flex-col self-stretch bg-slate-950 px-5 py-10 max-md:max-w-full">
      <div className="mx-14 mt-1 flex max-w-full flex-row items-start justify-between gap-5 max-md:ml-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <a
          href="https://coinmerce.io"
          className="text-xs font-medium slashed-zero text-white"
        >
          Coinmerce 2023 © Copyright
        </a>
        <a
          href="https://coinmerce.io/nl/privacy-policy/"
          className="text-xs font-medium slashed-zero text-white"
        >
          Privacy Policy
        </a>
        <a
          href="https://coinmerce.io/nl/risk-disclaimer/"
          className="text-xs font-medium slashed-zero text-white"
        >
          Risk Disclaimer
        </a>
        <a
          href="https://coinmerce.io/nl/terms-and-conditions/"
          className="text-xs font-medium slashed-zero text-white"
        >
          Terms and Conditions
        </a>
      </div>
      <div className="mx-14 mb-1 mt-10 text-xs font-medium text-white text-opacity-50 max-md:ml-2.5 max-md:max-w-full">
        Coinmerce B.V. has a registration with De Nederlandse Bank N.V. (DNB) as
        a provider of crypto services. DNB supervises Coinmerce B.V.'s
        compliance with the Money Laundering and Terrorist Financing
        (Prevention) Act and the Sanctions Act 1977. Coinmerce B.V. is not
        subject to prudential supervision by DNB or to conduct supervision by
        the AFM. This means that there is no supervision of financial
        requirements or business risks and there is no specific financial
        consumer protection.
      </div>
    </div>
  )
}

export default Footer
