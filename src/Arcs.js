import React from "react";
import ReactContactForm from "react-mail-form";
import Tax from "./tax.png";
import WageAge from "./WageAge.js";
import math from "./math.png";
//import Intro from "./Intro";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Cable from "./Dropwire";
import GDP from "./GDP";

class Arcs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    /*for (let i = 620; i < 820; i++) {
      this["scrollImg" + i]= props["scrollImg" + i] 
    }*/
  }
  render() {
    //const { width } = this.state;
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 620;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    //console.log(this.props.scrollTop)
    return (
      <div
        ref={this.props.chapter3}
        style={{
          position: "relative",
          width: "100%",
          textAlign: "center",
          fontFamily: "Nunito, sans-serif",
          backgroundColor: "rgb(20,20,25)",
          transition: `${
            this.props.offScroll ? 0.1 : this.props.scrolling ? 0.3 : 2
          }s ease-out`,
          color: `rgba(200,200,220,${this.props.scrolling ? 0.5 : 0.8})`,
          fontSize: this.props.offScroll
            ? ""
            : this.props.width < 300
            ? "21px"
            : "17px"
        }}
      >
        <hr ref={this.props.woke} />
        "wealthy must pay taxes to benefit those more vulnerable in society."
        Mark Dolan, tax from outside the market, or
        bond-tax/large-item-sales/estate-tax is{space}
        <a href="https://vaults.biz/geohash">useless price elasticity</a>.
        <h1>3% under $2k; reverse amortize, don't cancel nor bailout</h1>
        <h2>
          Marx was commenting on pogroms over credit-cycle, then died 1888
        </h2>
        fractional reserve in contract share split/accrual is the same thing
        <h1>
          surrendered freedom (EULA, third party donee beneficiary claimable
          invoked)
        </h1>
        <h2>
          by expiring premium of hazard incentive; trade is not taking more than
          you can give
        </h2>
        Trust building instead of target margining operational networks, Free
        Rider Immutable? Only gravity toilets, police and lawsuits aren’t
        mutable. Truncated Production Tax to ween cops off bonds
        <h1>Let’s stay optimistic, defectors are important</h1>
        <h2>
          Insurance crisis of the hazard bearers’ inception. Pleas are
          inherently moot
        </h2>
        "moral, decent man is why people are coming into the country and
        trusting you with unacompanied minors, working-age."
        <br />
        <br />
        John Bachmann: "S&P index is overall health, invest in that," that is
        versus the dollar in market concentration... Public utility, is just
        like the ban mask mandate, you are ruining standing by not using
        existing laws, like voluntary trade, that which platforms do not pay.
        You don’t want “like public utility,” sounds like a way to trust build
        instead of margin target, again.
        <h2>
          “People need medication when they are homeless.” That is crazy, even
          if they live in texts and shoot up drugs.
        </h2>
        FUCKING LET THEM, 85% is max participation,
        <h1>
          we should castrate Martha Macallum, and the 19% disabled that are
          mostly 65+
        </h1>
        . Their entire lives to save, but actual-labor-shortage-borne-demand
        from finance caused homelessness. hours per home doubles every 5 years,
        not because of population growth, evidenced by GDP/p nearly constant
        1800-1913.
        <br />
        <br />
        "With pie insurance, quote specifically tailored to your business hazard
        tort mootable," another version of the name-your-price-tool.
        <br />
        <h2>
          Greg Kelly: "Wharton school, just like the president," caning Dr. Oz:
          "on our financial burdens, I know what to do: just get the government
          out of our hair."
        </h2>
        "The DOJ is not going to investigate itself, then, is it?" Mark Levin,
        "...give loans to the federal government."
        <br />
        "It’s complex for a reason, as American as apple pie." Greg Kelly.
        <h2>
          “Close your eyes for comfort it might make you tear a little bit.” A
          fucking doctor.
        </h2>
        maniacs is caused by GOP/Dems rent seeking science, expiring premium and
        stock gain fund "healthcare," implausible landlord use and repo-cycle
        kept down payments laundered and loitered. Userers, competing with
        consumers instead of for.
        <br />
        <br />
        alvin bragg: “Addition or low level crime, we are going to give services
        you need.” Drugs are fun, stop thinking it is your problem.
        <h2>
          death-rate by single year age isn't significant if you go beyond
          2019-20
        </h2>
        <Cable
          style={{
            width: "100%",
            height: "auto"
          }}
          img={true}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/aqpw3n85vnk7678/Screen%20Shot%202022-01-18%20at%206.02.55%20PM.png?dl=0"
          }
          float="left"
          title="Spicer & co (Newsmax) - China virion found and claimed they made it, cause, no less, rsather than output of bacterial infection"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “We all know covid originated in China,” uh the tests did… if you can't
        make virion in a lab without mitosis nor without bacteria, you have't by
        circumstance of people making it after imagining it, never before
        testing for it, asymptomatically or not, nor have you used significance
        beyond{space}
        <a href="https://humanharvest.info/polio">
          2019-20, nor used single year death rate
        </a>
        .<br />
        <br />
        <Cable
          style={{
            maxWidth: this.props.lastWidth ? "200px" : "300px",
            width: "100%",
            height: "auto"
          }}
          img={true}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/fckwkvi1l8ln0gj/Screen%20Shot%202022-01-18%20at%206.53.38%20PM.png?dl=0"
          }
          float="right"
          title="https://humanharvest.info/polio"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h2>
          "<a href="https://froth.app">Build more hospitals</a>, put them in if
          you have to without a crime!"
        </h2>
        "...the people have to decide," you plant both pricks, Senator. NYC
        voters are a danger to the people, 7%/population
        <br />
        "They don't want banks to invest or lend to oil companies, alone." 44
        years to payday current debt not compounding, reverse amortize
        (cash/debt)*income every year back, don't cancel write off tranche nor
        bailout, principal shown differently to investors deductible-premiums
        and borrowers or claimants.
        <br />
        <br />
        <h3>
          dead weight microeconomic box, or potential productivity (GDP/p
          discounted GDP/hours)
        </h3>
        <h1>Rent-seeking actual labor shortage borne demand</h1>
        <h2>Gentrification - Capitis Diminutio</h2>
        <h3>
          "diminishing of status through the use of capitalization (Roman,
          legal)
        </h3>
        "Stakeholder capitalism," means no ownership. "Take care of employers
        grow business, long term road for investors," input costs include
        equities (market-concentration), bonds (surrendered freedom, EULA),
        homes, labor, and profits.
        <br />
        <br />
        I am scared for homeless' lives, they are going to lobotomize all of
        them with chemical brain damage.
        <br />
        "Her delinquent son," the only reason there is tech deprecation GDP/p is
        because of Wall St "We are here for a short time, but eternal destiny,
        11/12 industry-variable jury agree," wouldn't they weigh that in the
        duress necessity of mvp. "Untoward, looking at porn or something."
        <h1>Websters: "cuck": img Alan Dersch</h1>
        No perfect people, why do you care about his sex, flawed individual
        personally, unlike the rest of us.
        <br />
        Common sense that Clinton always supported, FDIC Bailout Obama or Bain
        Capital.... Election Clinton and Trump 2/3 plural minorities. "We are
        going to have an honest vote because we are going to put our foot down,
        FBI/DOJ any{space}
        <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
          money-business
        </a>
        , we can't do it!"
        <h2>
          Trump trust built on a fake pandemic for existing business ppp,
          20%/yr+ spending
        </h2>
        <Cable
          style={{
            height: "380px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1sJhuX0pBNl8ticlsZH_TA_a-v2KxaVmU/preview"
          }
          float="left"
          title="Chris Salcedo (Newsmax) - Vaccine hesitancy based on the Mark of the Beast 1611 King James"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Chris Salcedo: "Dumbing people down for socialists," socialists just
        don't want cops to have the conflict of interest of bonds and
        pharmacies. Fuck off spic, Salcedo. Drugs are fun, open ingredients
        review board save the animals from testing. anything for science trust
        buck stock gains by Amazon market communism pensions Tax-break trust.
        "it is really sad what these never trumpers and socialists have done to
        us. Joe Biden and his party are menaces." these parade of boobs known as
        the socialist party of Joe Biden. all of you never trumpers and
        socialists did this." Desist the slander, real socialists and non-voters
        deserve their vote, "no." Desist in business discrimination doesn't
        start with age, sex nor race, but voluntary trade and Tranquility, for
        microeconomic Supply and Demand propensity to buy reason... The same
        exists, no matter the price, granting that supply has got to cash out
        and their demand is labor-borne.
        <br />
        <br />
        <hr ref={this.props.marx} />
        Socialist NEP is not KYC marx. {/** ezra charlie kirk*/}censorship
        beyond 11/12 industry General Maintenance Unit minimal viable product
        duress multiple permit is Capitalism, not Microeconomics/Marxism
        Labor-Borne-Supply and -Demand, with grounds to margin target
        operational monopolies, free rider mutable, for economic welfare,
        GDP/hour-GDP/p enumerated.
        <Cable
          style={{
            height: "380px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/airyagbikqd2czg/Screen%20Shot%202022-02-13%20at%209.09.53%20AM.png?dl=0"
          }
          float="left"
          title="Ryan Zinke says Maos' red book against landlords caused expected excess deaths of 15m with life exp 35 already"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "If you question the science, you are{space}
        <a href="https://vaults.biz/juris">harassed</a>, like Maos’ little red
        book."
        <br />
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          <a href="https://www.marxists.org/archive/marx/works/1875/gotha/ch01.htm">
            Vulgar socialism
          </a>
          and from it in turn a section of the democrats) has taken over from
          the bourgeois economists the consideration and treatment of
          distribution as independent of the mode of production and hence the
          presentation of socialism as turning principally on distribution.
          After the real relation has long been made clear, why{space}
          <a href="https://vaults.biz/inflation">retrogress</a>
          {space}
          again?
        </div>
        28 years earlier:
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          *Communism* deprives no man of the power to appropriate the products
          of society; all that it does is to deprive him of the power to
          subjugate the labour of others by means of such appropriations.
        </div>
        *Socialism* would be the end of *market communism*, *capitalism*, or the
        start of the original *
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          communism
        </a>
        *, where **utility is too broad to rent-seek**.
        <br />
        <br />
        "Detox, sober em up, get em clea, county jail, stopped suicide, meds on
        a regular basis, only help in their live, get involved in the net bond
        loss system. you need to be locked up, pig. DRUGS ARE FUN. These people
        want to be here, they would take the meds 2-3 times a day to take the
        room and board."
        <br />
        <br />
        "How does inflation accurately represent the ups and downs of the cost
        of living?"
        <br />
        Cost of living is what shills describe homes, that which is “not in
        GDP,” except velocity/yr or /qtr of m2’s collateral… 65% have mortgages
        in U.S. and 35% rent. People whom live at home with another
        houseLoiterer are the rest, or LEND. 5%/yr+ Homes (20 years to double),
        {space}
        <a href="https://fred.stlouisfed.org/graph/?g=KZSH">7.5%/yr+</a>
        {space}
        Bonds/Debt/Checking (10 years to double), 2%/yr+{space}
        <a href="https://fred.stlouisfed.org/graph/?g=Kj5o">
          Population and Inflation
        </a>
        {space}(40 years to double). This is not because of labor-elasticity,
        evident by GDP/p tech deprecation nearly constant{space}
        <a href="https://vaults.biz/gdp">1800–1913</a>
        .
        <br />
        <br />
        Etymologically, historical-economic books will *delineate between
        “homes, equities (market-concentration), bonds (surrendered freedom,
        EULA), profits and labor,” and “material.” The former set aren’t
        accounted for in inflation*, poverty (input-costs-of-living/income) nor
        even gini (according to{space}
        <a href="https://historicly.substack.com/">historic.ly</a>
        founder), nor GDP except in the collateral of the m2 monies!
        <br />
        <br />
        Business, from a consumer point of view, you are admitting the right
        sees business not as a consumer
        <h2>Respect isn’t more important than altruism.</h2>
        "Business, from a consumer point of view," you are admitting the right
        sees business not as a consumer. "What are you going to do about the
        child, cheap labor in your house right now. I don’t think anyone cares
        about climate change.” Fucking Kike.
        <br />
        "Waiting list to get a washing machine in america, is what Joe Biden did
        to the supply chain with his Tariffs for no USPTO too broad utility
        trust gain; so he trust built ppp existing biz, on single year age death
        rate grounds to price fix natural market happenings,"
        corrections-forbidden from last-traded-parcel-value is literally
        prohibiting trade, corrections kept forcasted foreseeable and
        intentional to surrender the freedoms of others, liable as to otherwise
        not due diligence, as to why contractors put in EULA such third party
        donee beneficiary surrendered freedoms of co-signatories' customers as
        Savers. "Critical left theory think all fuss about nothing, red all full
        of blue school districts, corrupted by nonsense. turning red state
        children into blue state wokesters. he is above the target," Mark Stein.
        <h1>Keep cops out of pharmacy, and rent-seekers out of housing.</h1>
        <h2>
          been calling afro-chorers and -tools for self-deprecation, "niggers."
        </h2>
        homelessness and mental health is because og GDP/p inflation, not
        chemicals in the brain.
        <h2>
          mentally-ill person who is wandering through, threatening people."
          Cathy wilde, running in your face, spitting, you feel unnerved!
        </h2>
        "They are not getting the help I need, they are not being required to be
        removed from society." Would you rather cap rental income at 5 condos or
        storefronts, 5 autos, or 30 days for hotels, or $2k/day in a mental
        health name your price tool? "This is not inexpensive, a serious
        economic and legal commitment, so those who do present a threat to
        themselves and others not allowed to circulate freely in society, it has
        to be to be safe and secure." That is conviction based on opinion, by
        duress, no less. "Sleep deprivation cannot be estimated as contributing
        to being part of the problem." "Mentally ill people pushing people to
        deagh, changing their brain-chemically helps. Millions squanered."
        "Emergency asessment without court, just a conflict of interest (paid by
        conviction, rather than voluntary trade), legally you can keep more than
        3 days, but courts will be backed up because take them in court, make
        some type of infraction (without evidence, and mental illness." -
        Emergency Medical Health Unit in NYC...
        <br />
        <br />
        "Mask mandate ban," is literally the adjudication of the law, to desist
        by 1/12 reasonable doubt it is required for minimal viable product
        industry-variable consensus science for business-consumer relations on
        the grounds of informed consent, duress, surrendered freedom (EULA,
        third party donee beneficiary claimable, liable of contractor not to
        compound nor non-compete, non-concurrentable name your price expiring
        premium laundering), involuntary trade and Non-Tranquility!
        <br />
        <br />
        <Cable
          style={{
            height: "380px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1xhmEN92OylpXzjHkw8SFyB2qcfCDQ4Se/preview"
          }
          float="left"
          title="Eric Bolling (The Balance, Newsmax) - voter turnout excluding eligible/detesting"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Free money share-split (ostensibly-state-lands) is like flamethrower on
        a bond fire booming into the seasonal Retail sales, doing nothing.
        ...The way Americans leans 5% since 1955." Swing voters stay home!
        <br />
        <br />
        “Cops need to be defunded because they are racist,” “that’s the
        problem.” I'm pretty sure it is the conflict of interest: pharmacy and
        bonds.
        <br />
        maybe she doesn't like you, or you don't like her. "No{space}
        <a href="https://teapharmacy.party/drugs">drugs</a>
        {space}nor cartels like the good old days," when pharmacies were without
        scripts and functioned as currency by debtless vault share NAV/sdr.
        Working age! Working age might lower tech deprecation, GDP/p,
        discountable for GDP/hours.
        <h2>spit it out goomba</h2>
        Rudy sounds like he is having a stroke today, thank G-d!
        <br />
        <br />
        "Name your price non-rollover (hours, non concurrentable and non
        compete)"
        <br />
        “Somehow spending on Harlem doesn’t get to the people,” you think they
        would intentionally UBI? You just want Saver surrendered freedom (EULA)
        share-split.
        <br />
        <br />
        "Can casinos or any type of bet for money end?"
        <br />
        Legally, I believe there may be grounds by the **invariable chance of
        duress, to which the house or repo-cycle kept down payments always
        wins**, although the latter example is stated on grounds that I’ve found
        in surrendered freedom (EULA, third party donee beneficiary claimable)
        by credit compounding or general-income of the co-signatories’ customers
        as Savers to loiter and launder instead of selling equity or profit
        share, max-profit royalty to keep equity relevant... The terms are still
        up in the air, but to me, a *pyramid scheme is rent seeking the initial
        investment*; ponzi is pyramid *when the assets aren’t concurrentable
        upon withdrawal*.
        <br />
        <br />
        Nick Carducci - Legal Writer & Software Engineer at Vaults
        (Debtless-Brokerage) (2020–present)
        <br />
        <br />
        "Can the economy survive without Wall Street?"
        <a href="https://occupywallst.quora.com/">Wall St</a>
        {space}can be a euphemism for equities, but more precisely, it can
        denote the SEC-/IRS-guided public investment trust, that which **shares
        can be logistically traded without **incorporation nor** even dilution
        of your share on the exchanges** (e.g. Nasdaq). Max-royalty can contract
        outlay schedules upon actual receipt of customers, unlike bonds, that
        which compound or general-income of third party donee beneficiary,
        {space}
        <a href="https://saverparty.quora.com/">Saver Party</a>’s surrendered
        freedoms (EULA). The exchanges are subject to 13D-retail anon uuid
        discrepancy and pattern day trading ({"<"}$25k) subjugation, in order to
        enable the options market (the reason to diversify is so that you are
        not overweight where they can trade against you, not in aggregate, or
        **retail would have anonymous period before disclosure of holdings as
        well**).
        <br />
        <br />
        "Is communism utilitarian?"
        <br />
        As utilitarian as microeconomics’ Supply and Demand can be.
        <br />
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          Communism deprives no man of the power to appropriate the products of
          society; all that it does is to deprive him of the power to subjugate
          the labour of others by means of such appropriations.
        </div>
        <br />
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          Communism
        </a>
        {space}
        is too broad utility, open, for settled trade. The co-option of the term
        has obfuscated the meaning, especially if it is true that 15m and 3m
        excess deaths were expected due to absence of sewage (see life
        expectancy of no-toilet-India, today) and **population growth of life
        expectancy age**, for The Great Leap Forward and Russia’s “famine.”
        <br />
        This removes rent-seeking dead weight box (microeconomics’ welfare,
        **GDP/hour productivity, discounted for tech deprecation GDP/p**), by
        invoice, expiring premium false bid pool name your price tool (rollover,
        not hours for non-compete nor concurrentable), implausible landlord use
        beyond 5 condominiums + storefronts, 5 autos, 30 days (for hotels) and
        repo-cycle kept down payments (max-profit royalty p2p, banks invest in
        concurrentable equity, all to not surrender freedom (EULA) of customers
        as Savers.
        <br />
        <br />
        "A new anti-work movement of people quitting their jobs, in droves." -
        Bob Sellers, not accounting for new hires.... "Here is what Psaki said,
        '...pandemic...'" single year age death rathe beyond 2019-20 is
        insignificant. "supply chain shortages because government paid people to
        not work," continuing claims were allowed by you, Rick Santorum.
        <br />
        <br />
        <Cable
          style={{ width: "540px", height: "700px" }}
          onError={handleScollImgError}
          //img={true}

          src={
            this.props.nofred
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=600`
          }
          float={"left"}
          title="65+ 1.2x 55-64 and 1.3x 25-54, per person; that's 2.4-2.5 elders for every 3 working-age - https://fred.stlouisfed.org/graph/?g=H5XB"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Record turnout," is less than 2/3... Savers will turnout non-voters,
        65% support Occupy/saver rent seeking. "Republican identification
        greater than Democrats," bipartisan choice of no other than rent-seeking
        monopolies for government trust.
        <br />
        <br />
        *Socialism* wouldn’t reappropriate labor equity, when defined by
        {space}
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          Marx’s Communism
        </a>
        , that from which he would describe the U.S. as *Capitalism*, and myself
        as *Market Communism*.
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          *Communism* deprives no man of the power to appropriate the products
          of society; all that it does is to deprive him of the power to
          subjugate the labour of others by means of such appropriations.
        </div>
        *Socialism* would be the end of *market communism*, *capitalism*, or the
        start of the original *communism*, where **utility is too broad to
        rent-seek**.
        <br />
        Namely, forms of rent-seeking to which *socialism* is not evident in the
        U.S. state economy, are: Free Rider mutable Tax gentrification for
        higher bid from outside the market of the same goods, invoices -
        surrendered freedom of (EULA) customers as Savers, expiring premiums of
        the name your price false bid pool “tool” instance, implausible landlord
        use beyond 5 condos+storefronts, 5 autos, or 30 days (for hotels) and
        repo-cycle kept down payments.
        <h1>
          The brightest shorts on wall st are worried about the dollars' last
          stand, gold sellers looking to sell.
        </h1>
        <h2>
          Capital gains can be from innovation and not exclusively dollar, but
          that will only be relative to other equities, not the dollar.
        </h2>
        Unemployment is 3%, 6m jobs in a year,” Saver party will retire ya. Go
        launder funds to Home Depot, Dems & GOP, stock gain funds,
        broadband/bridge, ppp bbb ccc trust, vaccines instead of Free Rider
        Immutable sewage (gravity toilets, no-toilet-India mortality,
        cross-sectional).
        <br />
        <br />
        "How does a bubble affect the economy?"
        <br />
        Actual labor shortage borne demand, repo cycle kept down payments as
        input costs are of transitive property of input costs, surrendered
        freedoms of Savers and co-signatories’ customers (EULA), fostering
        market concentration and tech deprecation of GDP/p. That which are
        collateral, is not counted in inflation, discounted in real, gini nor
        poverty (input-cost/income), although GDP is literally, “m2 velocity per
        year or quarter,” that is “mutual funds,” of stock and homes collateral…
        <br />
        <br />
        &bull;{space}6m/40m from{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KQRA">6m/20m</a>
        {space}(5 years to double hours per home) unemployed, total, not the
        survey rate.
        <br />
        &bull;{space}GDP/p 1800–1913 was nearly constant, unlike{space}
        <a href="https://fred.stlouisfed.org/graph/?g=Kj5o">this</a>
        <br />
        &bull;{space}
        <a href="https://fred.stlouisfed.org/series/LNS11300060">
          25–54 participation
        </a>
        {space}(by itself) 85% max 2000, for likely single age reason. 19% of
        the population is disabled.
        <h2>
          real socialists do not wish to Tax for government, nor trust for
          corporate ppp
        </h2>
        Grocer, victim of Truncated Production Tax rather than debt spending and
        stock gain funded pensions/social security, 65+ disability, thinks money
        market isn't dead-weight box, understands 44 year to use income
        impossibly on current debt, cannot make old debts payday, only can
        reverse amortize (cash/debt)*income every year back:
        <h1>
          Courage is to not allow them to bail themselves out with Saver-funds,
        </h1>
        <h2>Tax-payers are on vacation, 40% debt-spending amortized is 99%,</h2>
        “Banking industry, not enough courageous bankers to say, ‘no’” it is
        their liability to surrender freedoms of others (EULA).
        <br />
        <br />
        “99% Tax for vaccines for the poor for the global pandemic with no
        increase in single year age death rate.” Frank Diaz, you chode. It’s not
        a pandemic, there is no increase in single year age death rate. Any way
        to make the funds go to their companies and outstanding debts, $2t
        checking and $88t debt. $21t/yr is GDP/yr, but 11/1 of that is mutual
        funds’ velocity per year or quarter. That doesn’t compute! The
        accounting of the federal reserve is fraudulent. We can kill them.
        "livlihood hangup."
        <br />
        <br />
        "Is economic expliotation morally or economically justified?"
        <br />
        Actual labor shortage borne demand is counterproductive, but it is hard
        to say competing with consumers, plundering or implausible use
        rent-seeking (5 units or 30 days, not price), isn’t a way to increase
        your bid, but that may be all it does. There isn’t net value creation by
        finance or other tech deprecation of higher GDP/p over time.
        <br />
        <br />
        "what can we do to prevent fires in bronx, it would be to allow equity
        to be owned without the duress of renting nor borrowing for loitering
        and laundering surrendered freedom (EULA, third party donee
        beneficiary)" ag tish james.
        <h2>
          Why are they calling criminals, mad? Don't you want to jail them?
          enough of the meds racket!
        </h2>
        How do you tina moore, ny post police bureau chief, prevent people from
        killing for housing (jail)?
        <br />
        “I don’t want mentally challenged people asking for a dollar right in
        front of me,” Greg Kelly.
        <h1>
          “K2 the most powerful stuff in the world,” that is poison, sanctioned
          by the state, not bud.
        </h1>
        If you didn't profit from it would you do it? "His family says he
        sufferes from schizophrenia," did he tell you about any hallucinations
        or are you just going by expert opinion that GETS PAID BY THE DIAGNOSIS.
        You don't need a 5th grade education to understand the conflict of
        interests fides here, deborah valentine, you nasty bitch.
        <h2>when home contracting, sell without credit, don't rent it out.</h2>
        "Do people really have ownership of their land in the United States?"
        <br />
        Certainly if you amortize debt service to the treasury, Federal reserve
        and treasury home collateralized-loans or private mortgage bonds,
        legally, and count mortgages, which is what 65% do (35% rent, the rest
        LEND), do people not own their homes outright, nor plausibly (loans are
        a net loss competing with consumers by a fixed game).
        <br />
        <br />
        The rest, live with the householder, and 36% rent. 20% of lands in the
        U.S. are state lands, so ostensibly dollar v bond might win out as
        state-land-deeds. You can think of net exports as importing foreign
        lands, then. Article 4, 3, the Preamble defining Tranquility, Amendment
        13 and 14 Section 1 would have to prevail over Am 14 Section 4, whereas
        value-last-traded equity-share, name-your-price-toolage false bid pools
        of your customers’ surrendered freedoms (EULA), contractor due diligence
        liability, also in debt “investment,” generally 1/3 public ($12k/64 new
        debt/cash per person a year) of $4t/yr 40% debt spending, Free Rider
        mutable Tax, stock gain funds (market concentration over the dollar),
        and expiring premiums (insurance), mixed/net, especially when 44 years
        to use current income implausibly on current debt is the chance for
        payday to be solved, and repo-cycle kept down payments is still third
        party donee beneficiary claimable-invoking.
        <br />
        <br />
        The only way out is (cash/debt)*income every year back so we all paid
        what we would have without debt, Truncated Production Tax, and p2p
        max-royalty or equity investment bank not non-compete (hours),
        concurrentable (non-expiring). I call this “reverse amortization,” as
        not to cancel nor bailout, and without a violent correction with
        foreclosure input costs, transitory.
        <h3>
          Sure, forced to do it, raises demand by marginal consumer beyond their
          propensity for price of their laborequity.org; collective bargain, not
          by price, for same consumers, front-ran.... appraised then kept down
          payments to... surrendered freedom (EULA, third party donee
          beneficiary claimable).... is raised demand by price alone, not actual
          labor borne demand, ...nor forced or duress purchases, quality,
          margin...
        </h3>
        "Will history look back kindly on the Fed's experimental QE program?"
        <br />
        GDP/hours is productivity maybe if{space}
        <a href="https://vaults.biz/gdp">GDP/p</a>
        {space}is discounted, m2 stock funds velocity/yr or /qtr.
        <br />
        <br />
        "How does quantitative easing impact banks?"
        <br />
        Ostensibly state-land share split for market-ask bonds, sustains the
        capacity of the natural market of new 20yr+ treasury-bonds, rolled in an
        index-fund, surrendering others’ as consumers’ labor equity or savings
        (EULA), where they’ve gotten their demand notwithstanding, at now 40% I
        estimate.
        <br />
        <br />
        "This doesn’t answer the question. It is nonsense. What are you trying
        to achieve?" - Mark Munday, Economics educator.
        <br />
        <br />
        QE is federal reserve “buying,” dollar share split of Savers’
        surrendered freedom (EULA), of on-market-ask 20+ treasury-bonds,
        outstanding, not new issues…. **banking invests in these bond index
        funds**, be them *credit union* or *commercial*, not *investment banking
        of equities*…. concurrentable & non-compete hours. This is my
        {space}
        <a href="https://vaults.com/party">business</a>, debtless brokerage of
        p2p royalty contracts & sdr.
        <br />
        <br />
        "Debunked FBI planned Jan6 because never was charged,” deb valentine,
        what?
        <br />
        "Using the mental health system as homes and not getting the services
        they deserve.” You can’t decide what we deserve. Extrapolating before
        shuffling is proof, as well as single year 1942 birth growth, life
        expectancy/average age at death, as basis for ppp trust as well as honor
        system signatures by mail instead of ballot system with open source,
        otherwise it isn't just not auditable by voters with magnetic data, but
        it is not a uniform entry, handled by hands, requiring of certification
        by both technical-faults. "Alludes the immune response," cleanup of not
        evolutionary trait weaon of no gain nor taxonomy, but byproduct
        prevalence... by bacteria....
        <br />
        "Deliver jobs and justice of the sacred right to vote,” gentrification
        is exclusive of voting…
        <br />
        <br />
        If on gold standard, still saw inflation GDP/p.
        <br />
        1800-1913 was nearly constant.
        <br />
        Would you say inflation is Per capita consumption growth.
        <br />
        So inflation is from debt spending not merely printing for the debt.
        <br />
        <br />
        $15k/yr summer bartending, the height of hospitality. injured on a run
        due to trail. My mom is now payee because she is in debt, I have none
        collateralized. I am due $45k. I am not going to take credit as income
        <h2>
          <a href="https://www.cbpp.org/research/social-security/social-security-disability-insurance-0">
            off with ppp trust heads; 65+ most disability, 19%, stock gain
            funded Amendment 14 Section 4
          </a>
        </h2>
        Adjusted for inflation, as with poverty input-cost/income, nor does
        gini, include{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KYvA">
          homes, equities, profits, bonds and labor
        </a>
        ...
        <br />
        Free Rider mutable Tax (from outside the market pure elasticity of the
        same variable input, there is no fixed, sprints are materials and labor)
        and Immutable made mutable by 40% debt spending surrendered freedom
        (EULA, third party donee beneficiary claimable).
        <h2>
          Inflation is not a matter of fact of life, labor is elastic if it is
          exclusively demand.
        </h2>
        GDP velocity/yr or /qtr.
        <br />
        It’s, actually, so concurrentable (not last traded value) on-market
        (ask), yet you can’t buy services with money; but then again, the matter
        comes down to microeconomics’ Free Rider mutable price elasticity for
        even as fixed as laborless natural resources, depositary. Otherwise, why
        wouldn’t BEA disclaim GDP as equities’ velocity/yr or /qtr of m2 mutual
        funds’ homes and equity-share, not just material for it is food? I give
        up!{space}
        <span role="img" aria-label="worried">
          😟
        </span>
        <br />
        “Mental health/sick grand bargain,” “scrutinize.” mental health day no
        questions asked,{space}
        <a href="https://goo.gl/maps/eaSanRN8SSnwswb2A">doctor signature</a>, is
        just racket, too many pidgeonholes. "Sick days don’t rollover, I don’t
        care if they don’t because I never will use them."
        <br />
        <br />
        $4t/yr 40% debt spending $2t checking CurrencyComponentOfM1, m2 stock
        gain funds velocity is GDP, $2.7t/yr rents and expiring premiums, each.
        Any questions? I know I have one, how is mv1===mv2==GDP/yr?
        <h2>
          too many cooks in the kitchen, p2p max-royalty, bank equities
          concurrentable only
        </h2>
        <h3>not compound no non-compete general income</h3>
        job, congrats! sacrifice hours, non-compete, non-concurrentable
        <br />
        collective bargain name your price tool guided expiring premiums needs
        to roll................
        <br />
        Overwhelmed is an illness, not a caste. employers are holding a lot of
        the cards now, profits. legitimately ill slander, Free trips, whatever.
        <h1>WOKE MARXISM</h1>
        entitled to last traded value of stocks, my fat ass.
        <br />
        are you actually about to go into not using color as devoid of light, go
        for it. haha entrapment.
        <br />
        “Experiment see what explodes.” Personality not crime, what if she just
        didn’t like you.
        <h2>
          Finite producer duress, natural resources non-fixed GDP/p{space}
          <a href="https://vaults.biz/gdp">1800-1913</a>?
        </h2>
        “‘Give me job!’ - GenZ” 10x/boomer c1970 5 year to double hours per
        home, it is OUR{space}
        <a href="https://vaults.biz/party">SCIENTIFIC FRUITS</a>
        <br />
        <Cable
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "480px"
          }}
          img={true}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/x2jkgiidxhwhk4y/Screen%20Shot%202022-01-18%20at%202.43.45%20AM.png?dl=0"
          }
          float="left"
          title="https://vaults.biz/party"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Shopping mall beds, paid by Truncated sales Tax, grocer.
        <br />
        penn station don't know what to do with the homeless, bathing at the
        sink, brushing their teeth. how is that a mental diagnosis? No right to
        do that, but no right to call them mentally ill.
        <h2>millions, they are killing and stabbing, so many homeless.</h2>
        "Parents or sister acting as guardians and give a little money to go on
        an outing" to get money to bonds, it is a racket.
        <br />
        "Penny wise and pound foolish." No crime, what has mental health
        services actually solved except angrier peoples, that is not how you
        solve homelessness, but by economic policies to prevent rent seeking.
        "Conflating homelessness with mental, get state out of business, whole
        job is to have more mentally ill and homeless."
        <br />
        "There is no mental illness, it is statistically afro-killers, you gotta
        cut it with the bullsh*t."
        <br />
        "If I had my druthers Tom would be jailed for cursing, haha, judges &
        psychologists (that get paid by it) should have full autonomy"
        <br />
        “Scorpios are anxious, The others are a little nuttier.”
        <h2>
          Respect isn’t more important than altruism.
          <br />
          "You don’t have a right to being aired on direct tv.
          <br />
          Radio station airwaves, the public 'owns,'" but doesn’t rent-seek,
          that science UNTIL FUCKING NETWORK OPERATIONAL MONOPOLIES BY GOP
          <br />
          FUCKING RACISTS
        </h2>
        <a href="https://humanharvest.info/polio">mitigation factors at play</a>
        <br />
        Deranged mentally ill man battling schizophrenia for 20 years, is a
        complete lie. I was called schizophrenic for saying rollover insurance,
        while GDP is delusional.
        <br />
        Ticking time bombs prosecution without a crime, psych hold conflict of
        interest, make it voluntary, instead of expiring premium name your price
        false bid pool tool.
        <br />
        Kendras law certain criteria undergo psychiatric treatment, why wouldn’t
        you stop crimes after they happen instead of make shit up about people.
        <br />
        <br />
        Why has mental health service ever actually accomplished.
        <br />
        A danger to at least themselves and also others, you are making this up,
        slander.
        <br />
        I have never heard voices, but was called schizophrenic.
        <br />
        I’m called schizophrenic for saying rollover insurance. What has it
        actually done?
        <br />
        A danger to at least themselves and also others, you are making this up,
        slander.
        <br />
        Potentially suicidal or homocidal working with police social and
        psychiatric nurses, whom get paid by slander.
        <br />
        Out of control, talks about killing, ranting or raving, whatever, one
        psych, ambulance comes to emergency receiving hospital elenor bumpker
        case.
        <br />
        Have to figure if bad, mad psychiatric bad character, drugs are fun you
        fucking cunt. "Very clear threatening, not themselves, you know,
        psychotic. can agree, or can potentially be dangerous, psych signs form
        comitted but have to be heald legally if possibly 72," I was presented
        with a siringe without a choice. then they said I was kicking or
        punching trying to elope.
        <br />
        <br />
        show some change, just monitor eal good. psychiatric stabbed back, maybe
        if you didn't keep them from settled trade.
        <br />
        <br />
        They will present you with a syringe of G-d knows what and when you try
        to run they will claim you kicked and punched. They made up that I see
        things and
        <br />
        Marijuana is said to be correlated with accidents, but it is the same
        prevalence as per capita usage…
        <br />
        how does it help, paranoid schizophrenia,
        <br />
        What if your schizophrenic mother just didn’t like you? Ever tell you
        about voices she hears. Personality that you don’t like isn’t a crime,
        you shouldn’t slander.
        <br />
        I don’t hear voices, but because I had messy hair, the psych wrote me up
        a bill, we need voluntary trade and cap rental income by units or days
        to solve homelessness.
        <br />
        5 condos + storefronts, 5 autos, 30 days for hotels, we will have real
        market liquidity, and less homeless.
        <br />
        Listening to hear more about what your mom said about what she imagined.
        <br />
        GDP/p 1800-1913 saw no inflation amongst 3%/yr+ population. Danger to
        society, facilities not there.
        <h1>THE NAME YOUR PRICE TOOL CHASIST</h1>
        M2 is GDP and CurrencyComponentOfM1 is 1/11 because value is not
        concurrentable but it is reinvested, or enabled by, fractional
        reserve... pensions medicare social security stock gain funds, actual
        consumption per capita doesn't rise, only price, ...are you overeating?
        Productivity might be GDP/hour, discounted by tech deprecation GDP/p
        growth (non-durable).
        <h2>
          38% Medicare/social security/pension (2012), is funded by stock gains,
          expiring premiums & 40% debt spend $4t/yr
        </h2>
        False flags nor fraud would happen without conflict of fides from net
        loss bond profit, making Free Rider Immutable, mutable, rent-seeking
        science, expiring premium NATO, and... "Socialists want your wealth and
        raising taxes to do it." No socialist would Tax actual labor borne
        demand, not have pension-/social-security-/medicare-based funds by stock
        gains (market-concentration, flaccid loss, non-immediate).
        <br />
        <br />
        "Is money a lagging indicator for utility?"
        <br />
        Money may be a **brought forward/appraised indicator of utility**, that
        lags in making up its deficit; so, utility *overestimated, by invoice,
        expiring premium, estimated claim, or even repo-cycle kept down
        payments’ foreclosure*, laundered and loitered from Savers’ surrendered
        freedoms (EULA, third party donee beneficiary claimable).
        <br />
        <br />
        Pyramid scheme is rent seeking the initial investment, ponzi is pyramid
        when the assets aren’t concurrentable upon withdrawal.
        <br />
        No one is forcing you to applaud, joining in is endogenously your
        preference, there is no duress in any case, the spectrum is as far as
        the bookies can spread on credit.
        <br />
        Giving away Free stuff is the Democrat platform, by Free Rider mutable
        Tax from outside the market and 40% debt spending expiring premiums and
        stock gain funds.
        <br />
        <br />
        "All the money, infrastructure, needed to win," Sean 'Deep State'
        Spicer. It is Free Rider mutable... market-communist shill to rent-seek
        government gentrification for bond laundering and stock gain funds'
        pensions. Cops will shoot you for it. Congress gave them license.
        <br />
        <br />
        "They never had real jobs on the left!" Rental-income isn't a real job,
        we work{space}
        <a href="https://vaults.biz/party">10x/boomer</a>
        {space}more than when you did, and 25-34 is the highest employement
        participation ratio. The bottom-left will not take credit,
        name-your-price false-bid=-pool tools, nor repo cycle kept down payment
        implaysible deniably implausible and/or surrendered freedom of others
        (EULA liability of the compounder and general-income payday, now
        impossibly to payday p2p max-profit royalty, loitering, laundering
        counterfeit in contract third party donee beneficiary claimable -
        REVERSE AMORTIZATION BEING THE ONLY WAY OUT (CASH/DEBT)*INCOME EVERY
        YEAR BACK - 65% OCCUPY ANTI-RENT-SEEKER NON-VOTER TURN-UP!)
        <h1>
          Housing and food is included in CPI... homes, equities, labor,
          profits, nor bonds are.
        </h1>
        Court must see intent in all things, expounding to defend anyone is
        functionally relevant but also is good to game it out by externals
        <br />
        <div
          style={{
            backgroundColor: "rgb(150,60,120)"
          }}
        >
          <h1>Bull - "there is no jury science."</h1>
          Pay off investors to keep control of the company, collateral
          <br />
          New, fresh cash, from expiring premium false bid need money for the
          down payment
          <br />
          Open source allowed to enter evidence in trial
          <br />
          “Still want to help me.”
          <br />
          “Stunted emotions prone to violence, jury likes to see remorse in
          their killers. How can be anger without emotions? conviction
          determination is self contained and generating
          <br />
          Fuge state unlikely, she was literally fighting with them!
          <br />
          Because there was remorse,
          <br />
          Control safety spending temper, not scared, worried. In a place for
          help with her challenges what she needs.”
          <br />
          Means motive ppp “I’m part of a world that I don’t understand, and it
          seems like it doesn’t like me,” same relatively, not absolutely a lot
          of therapists”
          <br />
          Credit card 401k yacht”
          <br />
          Disassociative feuge
          <br />
          <br />
          Lack of proof without alternate theory deduced nor vacuum
          <br />
          Devoid of emotion, mentally ill
          <br />
          Emotional about themselves only
          <br />
          Jail plea is moot, jail delay is unnecessary, if you don’t have
          evidence of video you can’t deduce a fight wasn’t just self defense
          <br />
          Best course of action because he needed to get to work
          <br />
          Pragmatist, chose what is in front of them
          <br />
          Instigated the, didn’t see
          <br />
          Lying.
          <br />
          You are allowed to fight people for cutting line, the judge just wants
          to jail, as that is profit conflict fides, public disturbance how is
          that due for prosecution or tort
          <br />
          What are we supposed to pay suits who take too much time to settle all
          our disputes
          <br />
          Believe this case move up ladder, never said it wasn’t about justice “
          <br />
          Only a plea, not an analysis of the facts Real estate crisis is
          because of debt creating undue scarcity, labor competition will make
          elasticity of structures, and GDP/p growth is just debt
          <br />
          This juror is acceptable to the defense can be on no grounds other
          than feelings to make jury
          <br />
          Pay back in some way, detention funds by debt spending
          <br />
          Won’t even listen to asylum, let alone good deeds, illegal, unless
          under threat of debate in
          <br />
          Debarring
          <br />
          What is illegal about being in a country
          <br />
          Why no matter what able to do, can’t follow laws, what is the point,
          of laws
          <br />
          How do you prove a country is dangerous, asylum
          <br />
          Obligated to refute character evidence, if presented by defense or
          prosecution, first pattern
        </div>
        <br />
        <a href="https://www.yumpu.com/en/document/read/18596138/slave-narratives-library-of-congress/41">
          good history
        </a>
        <h1>gerontocratic rent-seeking actual labor shortage-olds</h1>
        <h2>
          "Their problem is that they have not been beneficiary of the golden
          calf yet."
        </h2>
        "These people want to divide us,{space}
        <span
          style={{
            textDecoration: "line-through"
          }}
        >
          MLK wanted to multiply and add
        </span>
        ." Hitler called himself communist 50 years after Marx died. Afro-tool,
        dividing is per capita and average measurements of the integral,
        unextrapolated, unshuffled.
        <h1>what, elder son boy? chorers don't count</h1>
        <h2>
          "Death to actual labor shortage borne demand!" we scream from the
          expert jury saveface lest malpractice and jail jury box.
        </h2>
        Deranged psychopath, no priors, hospital puts his hands up. Hospital
        only can psych hold for $20k/go.
        <br />
        Run down the street with a hand grenade, until you can be evaluated, at
        BELLVUE.
        <br />
        SOUNDS LOBOTOMOUS.
        <br />
        SOCIAL WORKERS TO WORK THROUGH WHOSE ISSUES? My walking. With hand
        grenade is MY prerogative. 15 physicians incapacitated, danger to
        society. Law and order is after a conviction only.
        <br />
        Common sense republicans, democrats and woke culture. GET COPS OUT OF
        PHARMACIES, BONDS AND AMAZON.
        <br />
        Not funny faggot
        <br />
        <br />
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          "How many people are worried about the latinos in california and
          Florida it doesn’t take one day for you to do the right thing, if
          Chinese person became governor, who would [in their right mind] say
          the Chinese are taking over America."
        </div>
        <br />
        Salcedo: "Crime wave per capita. Disppeared into America as Socialists
        have planned. Illegal gun market has exploded. No scripts? tight.
        "Purchased from a homeless sheter because that is where he was snapshot?
        We don't know what order. Brother claimed, "mental issues and criminal
        history."
        <br />
        radicalized islamic fundamentalist, playing Iblis
        {/**taking law into own hands, "playing cop" */}
        <h3>
          “Jews worst people in world stab in back, that is why they keep
          getting pogrom’ed.” So it isn’t about kissing the ground 5x/day lest
          beheading on the rug trail?
        </h3>
        "
        <a href="https://qr.ae/pG3BGr">
          Enjoy property values going down, because no one will want to be here
        </a>
        ."
        <br />
        plea bargain guy, 'beyond the legal limit.' "have you seen anyone with
        vaccine get sick?" The prevalence is just as sick for the vaxxed and
        unvaxxed, flue and vaccine is the same, you just don't count
        all-inclusive artifact of sickness, non-all-incident.
        <br />
        I bid-by/work-for science, alone!
        <br />
        redi sun longitude spin
        <h1>I’m not a fucking prolific thinker, I’m fucking right</h1>
        "Immune system is to fight bacteria, virion MAYBE just cleanup and
        cancer, but{space}
        <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2">
          when you 'overflog' something, it actually becomes oncogenic
        </a>
        , excess. ...[This]pandemic becomes endemic,"{space}
        <a href="https://humanharvest.info/polio">
          not a pandemic, death rate is normal per single year age
        </a>
        .
        <br />
        <br />
        (Truncated) Tax capital gains discounted for inflation, after there is
        no inflation, as like{space}
        <a href="https://vaults.biz/gdp">1800-1913</a>? It is equity, I don't
        believe so.
        <br />
        <br />
        "Gold was used as currency 1000 years ago, Gold will be used 1000 years
        from now." IRA 18669320635....
        <br />
        <br />
        Maybe she doesn’t like you, I think he likes it
        <br />
        Cuomo pierced nipples
        <h1>"Honest day's pay for an honest day's work."</h1>
        Gold seller: "inflation is on the rise, so stocks may be in jeporady,"
        how, input costs are labor and materials, but stocks are market
        concentration of entry as labor, all other supply is dead-weight of
        "economic welfare." productivity of trade finding amongst labor-borne
        demand propensities and capacities.
        <br />
        <br />
        "Great day to get vaccinated against covid 19,"{space}
        <a href="https://www.fda.gov/media/144245/download#page=42">BoiNTech</a>
        {space}and{space}
        <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_diffe">
          Pfizer
        </a>
        .<br />
        <br />
        "From the perspective of everyday VA families, times are tough, cash
        flow relative to government is very high,
        <h2>m2 velocity to GDP is mostly collateral appraised by A. Yang.</h2>
        Surpluses and Tax cuts by government gentrification of science, and
        rent-seeking."
        <h2>
          You are a market-communist, Marx and I would call you on the right and
          top-left.
        </h2>
        "This commonwealth, on a pathway to prosperity. Full qualified and
        outstanding VA shills. 59 pieces of legislation, 25 budget amendments to
        reflect bipartisans (2/3). Virginians have given us license to Free
        Rider mutable colonialize them. Labor generates Tax receipts,"
        <h1>
          so why would you not include labor wages as input costs? it is in the
          sprint...
        </h1>
        "There is more that binds us than divides us, to leave a better place
        for our children, we pension/medicare/SSA Amazon stock gains.
        <h2>
          ...Worries of stagnant wages in the face of rising expenses, a stock
          gain funds of market-concentration from the dollar to save for their
          childrens' future." Somebody kill this guy!
        </h2>
        <h3>
          Nick Carducci Legal Writer & Software Engineer at Vaults
          (Debtless-Brokerage) (2020–present)
        </h3>
        <h1>
          disfatisfaction that hitler as scapegoat with jews, and the equity of
          labor in demand.
        </h1>
        <h2>
          "Do people really have ownership of their land in the United States?"
        </h2>
        <br />
        Certainly if you amortize debt service to the treasury, Federal reserve
        and treasury home collateralized-loans or private mortgage bonds,
        legally, and count mortgages, which is what 65% do (35% rent, the rest
        LEND), do people not own their homes outright, nor plausibly (loans are
        a net loss competing with consumers by a fixed game).
        <br />
        <br />
        The rest, live with the householder, and 36% rent. 20% of lands in the
        U.S. are state lands, so ostensibly dollar v bond might win out as
        state-land-deeds. You can think of net exports as importing foreign
        lands, then. Article 4, 3, the Preamble defining Tranquility, Amendment
        13 and 14 Section 1 would have to prevail over Am 14 Section 4, whereas
        value-last-traded equity-share, name-your-price-toolage false bid pools
        of your customers’ surrendered freedoms (EULA), contractor due diligence
        liability, also in debt “investment,” generally 1/3 public ($12k/64 new
        debt/cash per person a year) of $4t/yr 40% debt spending, Free Rider
        mutable Tax, stock gain funds (market concentration over the dollar),
        and expiring premiums (insurance), mixed/net, especially when 44 years
        to use current income implausibly on current debt is the chance for
        payday to be solved, and repo-cycle kept down payments is still third
        party donee beneficiary claimable-invoking.
        <br />
        <br />
        The only way out is (cash/debt)*income every year back so we all paid
        what we would have without debt, Truncated Production Tax, and p2p
        max-royalty or equity investment bank not non-compete (hours),
        concurrentable (non-expiring). I call this “reverse amortization,” as
        not to cancel nor bailout, and without a violent correction with
        foreclosure input costs, transitory.
        <br />
        <br />
        <h1>Drugs are fun you fucking dork</h1>
        Youngkin: "After years of fractured politics, pandemic, mental health
        caused by pandemic, drug abuse, food, fuel, housing. A new vision for
        the future, priorities, of the serfs."
        <br />
        <br />
        "Their providers expiring and doctors noncompete, name-your-price-tool
        false-bid-pools surrendered freedom laundered and loitered collateral."
        <br />
        <br />
        "Running out is sheer numbers because it is materials discounting
        labor." McCormick. If there is no broad utility USPTO trust (same-name,
        open-ingredient, review board will suffice original bona intent fides),
        entrepreneurs will meet any demand with labor-elastic input costs,
        "fixed," is FRAUD sprint-keeping materials and labor!
        <br />
        <br />
        <Cable
          style={{
            height: "520px"
          }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1G2rYWeuTVN6LBW-wP2TccgR16CImArKZ/preview"
          }
          float="left"
          title="Occupy Democrats, Heather Childers, Boris and Dick (Newsmax)"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Nobody is a perfect person." Heather Childers, speak for yourself,
        bitch.
        <br />
        <br />
        didn't feel as if breaking the rules," which rules?
        <br />
        vacuum/exogenous requires order and control, hypothesis assumption
        without alternative reason to doubt byline.
        <br />
        <br />
        "The second beast was permitted to give breath to the image of the first
        beast, so that the image could speak and cause all who refused to
        worship it to be killed. (16) And the second beast required all people
        small and great, rich and poor, Free and slave, to receive a mark on
        their right hand or on their forehead, (17) so that no one could buy or
        sell unless he had the mark—the name of the beast or the number of its
        name."
        <h3>
          “Simple majority is only ratifying a treaty, convicting an impeached
          person, or ratifying [an amendment?] to the constitution.” Nancy
        </h3>
        <h2>
          $4t/yr fed spending 40% debt spending, stock gain funds, and expiring
          premiums of Savers as consumers surrendered freedom (EULA)
        </h2>
        <h1>
          I've invented ArrayArrays, by RSA-keyboxing, for science! Government
          rent-seeking broad utility?
        </h1>
        Greg Kelly believes in sin sacrifice, social security retirement RMD
        table, go out swinging! taxed stock gain funds, not income when it isn't
        as a bookie but index-fund over the dollar: numerated market
        consentration.
        <h1>
          Do all macroeconomists believe GDP per hour is productivity?{space}
          <span role="img" aria-label="bottom-left white-circle squirrel">
            ️↙⚪️🐿
          </span>
        </h1>
        <h2>
          Lowering of GDP/p thru a time lens, time period, from time to time,
          change of rate, is tech advancement; GDP/hour should be discounted,
          for tech deprecation, to be productivity.
        </h2>
        People at high risk for warning mechanism of byproduct cleanup should
        not get vaccine for oncogenetic b-cell creation Bacterial cause.
        <br />
        Bacterial cause I guess is required for reasonable doubt deduction and
        why suspects are deduced to conviction without of-order vivo; virion, of
        no taxonomy, except evolutionary trait weapon, for no gain, is not an
        appropriate answer.
        <br />
        EVER, single age excess is year to year and 78 1942 growth is only per
        capita, not significant at all beyond 2019.
        <br />
        "Doesn't work anymore," it never did, MS is paralytic polio, sewage
        negatively correlative with mortality, not vaccines. ​Fight off
        infectious disease, "injecting DNA into cell." is made up. ​It only
        comes out as byproduct prevalence, bacterial cause; non-exclusive
        non-all incidence artifact of sickness.
        <h2>
          Imagine being a doctor; shilling one-take, lest malpractice for a
          century+15; reparations (jail expert savefacers) and jack of all trade
          politician/statistician.
        </h2>
        "How can market participation be increased?"
        <br />
        *GDP/working-hours, GDP/p nor working-hours/population participation*,
        **doesn’t count for chores, copy, nor science, just jobs** of usually
        too-broad copy, rent-seeking by implausible landlord use (beyond 5
        condominiums + storefronts, 5 autos, or 30 days for hotels), or quality
        by duress beyond minimal viable product of finite producers, against the
        price equilibrium assumed in microeconomic Supply and Demand, the basis
        of Tranquil and voluntary trade, comparative advantage and tech
        advancement ends to deflate prices and retire for durable-trade, or
        GDP/p lower, from time-to-time. We consume the same actually every time,
        just prices change. So, I wouldn’t target *market-participation* if you
        which to **utilize tech advancement**.
        <br />
        GDP is velocity of m2 per time period, mutual funds and 1/11 checking
        (currencyComponentOfM1). 38% of the U.S. budget (that is 1/3 of
        private+public debt spending $12k/64 debt/cash new per person a year) is
        Medicare, pensions and Social Security (19% disabled, mostly 65+, 85%
        25–54 2000 max, mostly 25–34, 45–54 pay the greatest per capita), that
        is stock-gains-funded, 40% debt spending, and Free Rider mutable Tax
        from outside the market for useless price inflation of the same actual
        consumption, from time to time, by expiring premiums and invoices, and
        repo-cycle kept down payments forfeiting surrendered freedom (EULA,
        third party donee beneficiary claimable) grounds.
        <h1>GDP and social security is stock gain funds,</h1>
        <h2>just like ppp trust of fruits laundered, loitered, unduly</h2>
        Promised the US unwavering support makes Free Rider Immutable, mutable
        when by expiring premiums’ NATO, subject to conflict of interest false
        flags and hazard fraud.
        <br />
        That which we know but surrendered freedom by dilemma goes unprosecuted,
        the liability of the contractors’ due diligence and the cause of wealth
        inequality by actual labor shortage of rent seekers by invoice,
        expiring, estimated claim, expert jury, implausible landlord use and
        repo-cycle kept down payments implausibly deniably implausible.
        <h2>
          "Concerted effort in low-income systemic barrier of relief, mom and
          pop trust, to know who is qualified by age unblind. job report is
          blind deprecation of GDP/p productivity per time period."
        </h2>
        equity is something else, equality is enlightened and beautifyl,"
        {space}
        <a href="https://laborequity.org">Greg Kelly</a>
        {space}agitprops shares as a non-matter, while it is collective flaccid
        loss by corporate profits. collective bargain must be immediate
        (depositary, vault-share of bookie-locale) and concurrentable.
        <h2>
          "Prevent public safety threats," are you sure it isn't
          visa-racketeering and therefore racism?
        </h2>
        m2 is mutal funds of homes collateral, so actually GDP is that and
        equities, 38% of $4t/yr is why only $2t checking currencyComponentOfM1
        exists, I must deduce.
        <br />
        1/4 1/4 1/4 expiring premiums, pentagon, pensions of stock gain funds,
        that is why the right was mad at AOC for preventing Amazon stock
        gentrification of NYC. make your own.
        <br />
        stock gain funds makes gains at the cost of labor hours, not labor
        costs, because they eat that.
        <br />
        10x hours per last traded unique home c 1970, 5 years to double.
        <br />
        not because of population, GDP/p 1800-1913 nearly constant amognst.
        3%/yr+ pop.
        <br />
        forgoing motive for brain malformation? self-deprecation of policing.
        <h2>
          Everyone who is against debt-spending, expiring-premiums and
          expert-jury commit no-crime but are
        </h2>
        <h1>labeled as having mental health issues, then go on to say</h1>
        <h3>
          their motive is malformation of their brain without proof other than
          brain lesions by consensual drug use or
        </h3>
        <h1>
          subjective-/irrelevant-objective-opinion and slander by heather
          childers.
        </h1>
        "You will be welcome there. Pretty much everybody.
        <br />
        The border is a terrible problem 129 countries are emptying prisons, the
        U.S. is not a dumping ground for the kind of people we want, from Mexico
        and Honduras.
        <br />
        ...Border, inflation, fuel prices. ...Prices that were great for
        industry and the consumer. Make america great again again,” input costs
        are input costs… fixed are variable, with labor.
        <h2>
          <a href="https://www.academia.edu/Documents/in/Islamic_Banking">
            War for equity
          </a>
          {space}by actual labor not rents implausibly deniable plausible and
          slander; no shmita nor build-up oncogenesis
        </h2>
        islamic banking is exclusively investment banking, of concurrentables.
        <br />
        every crime is intentional, and every plea is moot, every law/precedence
        is questionable, by politics & reason.
        <br />
        <br />
        John Bachmann: "Getting their background checks, getting their concealed
        carry permits, their business name unchanging review board and open
        ingredient lists," but you want government to profit/rent-seek on their
        contributions to science?
        <h1>
          Duty Free market, Free from government Free Rider mutable of
          immutables
        </h1>
        "How the law of deminishing returns affects the shape of the short-run
        average cost curve?"
        <br />
        Average cost is the Sum of marginal costs of individual propensities
        after the ask and bid are slickened by bookies, whom lay prices on both
        sides. The *marginal cost is elastic for “fixed” or startup structural
        costs that are, in fact, variable for labor, and materials for that
        matter, but BEA classifies new ***structures and investment as
        invariable for price-elasticity (flat marginal and therefore average of
        marginals, after bookie…)**, curiously, where we know labor-elasticity
        proves prices change not from population growth (3%/yr+ 1800–1913
        produced nearly constant GDP (https://vaults.biz/gdp)) but finance and
        rent-seeking by invoice, expiring premiums, estimated claims,
        hung-jury-duress of ask-first finite producer lot (TINA), implausible
        landlord use above 5 storefronts + condominiums, 5 autos or 30 days of
        actual labor shortage borne demand, and repo-cycle kept down payments of
        surrendered freedoms (EULA) of co-signatories’ customers as Savers.
        <br />
        <br />
        Elasticity is strongest at the beginning for opposite side of the market
        propensity to **meet in the middle of their respective offers, ask and
        bid, and collective bargaining**, which diminishes marginal cost savings
        as scarcity is true for natural resources, if at all able to treat labor
        as exogenous of its input cost.
        <br />
        <br />
        "65% of U.K. households now have access to the fastest connection on the
        planet, because we trust and bond launder debt service our 30% debt
        spend, and 70% corporate Tax from outside the market, gaining mothing
        moore."
        <h2>
          The first rule of economics of allocation of resources and the trollie
          game is for comparative advantage, and price elasticity, that which
          money doesn't get you moore of something, unless it is Free Rider
          mutable. BBC private investors can buy equity or
          max-profit-royalty-contracts as to not surrender the freedom of the
          co-signatories' customers as Savers.
        </h2>
        "BBC will get private finance as it pursues ambitious commercial
        investment in the creative economy across the U.K." A fungible vault
        share sdr can be maintained by transaction fees Free Rider Immutable,
        not compound nor general income payday. Fees on p2p
        max-profit-royalty-contracts will suffice for the current “money
        market,” that is really surrendered freedom of customers (EULA, third
        party donee beneficiary) and should be a *dead-weight box
        (microeconomics)*.
        <br />
        <br />
        "Job creation will make an economic surrender by corporate trust
        building," Texas Republican. "Record voter turnout, 2/3. Easy to show
        ID, know last 4 of SSN. Easier and more secure at the same time."
        {space}
        <a href="https://thumbprint.us/voting">
          Tamper-proof explosion would work for NFC
        </a>
        .
        <br />
        <br />
        "Does a recession in the United States mean a recession for the rest of
        the world?"
        <br />
        Two consecutive declines in (GDP) the rate of mutual funds velocates/yr
        or /qtr would be a coincidence, by similar policies, even opposite, as
        GDP in Net Exports does measure bids hitting the ask for foreign state
        lands’ depositary (their currency, ostensibly). I would contend with
        Tak, to say, that, there are alternatives to just the U.S. for enacting
        higher demand-by-price policies (measured by an increase in GDP/p),
        certainly not actually consuming more things.
        <br />
        <a href="https://www.visualcapitalist.com/visualizing-the-94-trillion-world-economy-in-one-chart/">
          Visualizing the $94 Trillion World Economy in One Chart
        </a>
        <br />
        A fungible vault share sdr can be maintained by transaction fees Free
        Rider Immutable, not compound nor general income payday. Fees on p2p
        max-profit-royalty-contracts will suffice for the current “money
        market,” that is really surrendered freedom of customers (EULA, third
        party donee beneficiary) and should be a dead-weight box
        (microeconomics).
        <br />
        <br />
        "Qs=250P-500 Qd=5500-500P If ceiling price is 5$, then what is the
        change (graphically) in economic welfare?"
        <br />
        Price-equilibrium price (P*), solved in Qs(P)=Qd(P), then, find Qs(P*)
        <br />
        <br />
        750P=6000
        <br />
        P*=8
        <br />
        Qs(P*)=2000
        <br />
        <br />
        minus Qs(P) (with price-cap as P)
        <br />
        <br />
        Qs(5)=Qd(5)
        <br />
        1250–500=5500–2500
        <br />
        750=3000
        <br />
        Qs(5)=Qd(5)
        <br />
        <br />
        2000
        <br />
        -750
        <br />
        1250 (loss along x-axis economic welfare/output productivity, potential
        trade to better by entrant-enticement as supplier, GDP/hour, or more
        accurately, the opposite of that, being durable trade… in my novel
        opinion).
        <h2>
          You need to have the ability to strike, not withstanding the inability
          to fire
        </h2>
        <h3>(or not labor for, structural fixed startup costs withstanding)</h3>
        given it is a quid pro quo, but not for beliefs;
        <h2>just performance - for it is broad, beliefs notwithstanding,</h2>
        <h1>lest it be the operation.</h1>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/kDq6_dAZsBo"
          }
          float="right"
          title="https://youtu.be/kDq6_dAZsBo"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h3>
          "Having kids in school for your rent-seeking Free Rider mutable Tax
          and debt spend," is the Republican position.
        </h3>
        'General Director of Euro Exim Bank Ltd. got economists thinking when he
        said:'
        <br />
        "A cyclist is a disaster for the country's economy:
        <br />
        They don't buy cars and does not borrow money to buy.
        <br />
        They don't pay for insurance policies.
        <br />
        They don't buy fuel, does not pay for the necessary maintenance and
        repairs.
        <h1>Competing with consumers</h1>
        They don't use paid parking.”
        <br />
        Durable trade and retirement is the goal of comparative advantage tech
        advancement, economics. Not this.
        <h1>
          “Benefit from being a person, and being with eachother.” Emma
          Reckenburg
        </h1>
        Government money is share split and only raises bid if from out of
        market, so Free Rider Immutable, Truncated Production/sales Tax, sewage
        (cause of longer lives, gravity toilets), police (ween cops off net loss
        bonds' profit conflict), and lawsuits; not broadband/bridge fees for
        bond index funds 44x Savers, that would be 44 years impossibly with
        current income on current debt (as general income payday) to be Free.
        <h2>
          "Poverty, or extreme materialism (literally is material/income), is
          the problem, militarianism is the problem," Bernice King.
        </h2>
        "'Republican you are racist or a sellout.'" Angela King.
        <h1>closing the border is racist, visa-fees too</h1>
        Youngkin, Republican, "we will fully fund law enforcement with the best
        training available, social security, lower taxes." ALL THEY WANT TO DO
        IS DEBT SPEND. Van Drew, Republican: "Inflation is a core issue," to
        yoou because it DOESN'T INCLUDE HOMES, LABOR, PROFITS, EQUITIES NOR
        BONDS, although GDP is velocity of m2 mutual funds for that collateral
        and pensions/medicare/social security spends thes stock gain funds, not
        checking.
        <br />
        <br />
        Kilmeade: "The effect of omicron seems to be fading in NY." Goodwin:
        "the effect is of life expectange age growth. Michael Goodwin, politics
        are self-defeating at every turn. Donald Trump wanted to rent-seek
        broadband/bridge fees, fine instead of jail led-pipe-guys, government
        gentrification bond laundering debt service, 40% njta." Input costs are
        relevant for scarcity of population irrelevance by evidence of 1800-1913
        GDP/p, too? “90% are working, media like yourself lies.” 85% (25-54)
        counted copy/science forfeitures, 19% disabled, mostly 65+, funded by
        Amazon stock gains. Only when demand is without actual labor shortage of
        rent-seeking in p2p max-royalty lest equity stead.
        <br />
        <br />
        "you can legally own gold in a Tax sheltered account, not trade, for
        trust. past performance is not a garantee of the surrendered freedoms of
        others (EULA)." "If a lawyer gives you a plea, tattle to the bar
        assosiation," Vinu Vargeese
        <br />
        <br />
        "labor shortage 3.2% unemployment,{space}
        <a href="https://qr.ae/pG3lJc">
          is he wrong to assimilate household 60k
        </a>
        , 2m job, 4.5-5m includes 2.8m continuing claims, child Tax credit, no
        earnings to get it whatsowver, make up to $1m to get healthcare
        subsidized, which doesn't get moore...?"
        <br />
        <br />
        “82% for Obama, not an ID issue,” that’s out of voters with a choice
        between gentrification and gentrification.
        <br />
        5 minutes one child shot,”
        <br />
        every minute 6 children go missing in U.S. Bob Wooton on MLK Day
        <h2>
          Transmissible variant output evolutionary trait weapon, life
          expectancy age growth positive correlation
        </h2>
        <Cable
          style={{ height: "220px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1_0ljF2GyX0Wq91IcsvOAmIoNhCNt22H5/preview"
          }
          float="left"
          title=""
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Djokovic IS entitled to enter, for the pandemic isn't real, it isn't
        proven without bacteria nor vivo insenination of the cell, and the jury
        of industry-variable populous must decide by referendum in 11/12
        conviction of science. YOU aren't entitled to say reasonable doubt
        beyond 1/12 is not allowed to be in a country.
        <h2>
          Guardian overreacted to single year excess year to year growth, not an
          increase in mortality
        </h2>
        <h3>
          'Conservative': "for the people with coronavirus," bond
          holder/conflicting-fides
        </h3>
        "Does a recession in the United States mean a recession for the rest of
        the world?"
        <br />
        Two consecutive declines in (GDP) the rate of mutual funds velocates/yr
        or /qtr would be a coincidence, by similar policies, even opposite, as
        {space}
        <a href="https://apps.bea.gov/iTable/iTable.cfm?reqid=19&step=2#reqid=19&step=2&isuri=1&1921=survey">
          GDP in Net Exports does measure bids hitting the ask
        </a>
        {space}
        for foreign state lands’ depositary (their currency, ostensibly). I
        would contend with Tak, to say, that,{space}
        <a href="https://www.visualcapitalist.com/visualizing-the-94-trillion-world-economy-in-one-chart/">
          there are alternatives to just the U.S.
        </a>
        {space}for enacting higher **demand-by-price policies (measured by an
        increase in GDP/p)**, certainly not actually consuming more things.
        <br />
        A fungible vault share sdr can be maintained by transaction fees Free
        Rider Immutable, not compound nor general income payday. Fees on p2p
        max-profit-royalty-contracts will suffice for the current “money
        market,” that is really surrendered freedom of customers (EULA, third
        party donee beneficiary) and should be a *dead-weight box
        (microeconomics)*.
        <br />
        <br />
        <h1>Let's shake on it, andrew doyle</h1>I don't care if something is bad
        for you, you are the judge of that, surrendered freedom MY rights, that
        which an EULA is due diligence of YOUR counterfeit in contract
        liability, by expiring premiums, expiring claims, implausible landlord
        use, repo-cycle kept down payments and state vic instead of jail by
        industry-variable conviction.
        <h2>
          Describe matter would be to scribe it; relative to a time unit is
          making from nothing of rates not absolutes... cute, acute?
        </h2>
        <h3>do you want to play a game?</h3>
        Blind random drug trials, dumb waiter,” can’t actuallyy here” Abi
        roberts
        <br />
        <br />
        "Socialists drop dead,” "driven to terrible deeds when delivered the
        right words.” Brendan O’Neil, Spiked.
        "AARP-expiring-deeds/Amazon-stock-gain-fund/Social Security drop dead."
        <h2>
          no one gets candy with such a thought, but buying it is of duress...
        </h2>
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1v3jj4C2_-jN2ej5V2bwE5OZ0tZhCSNo2/preview"
          }
          float="right"
          title=""
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h3>
          11/12 vote should desist, if consumers are not enough of a sample,
          normally just industry-variable
        </h3>
        angry emails from short people is funny (confusing), dwarfism or
        disability (normally not self-deprecationable)
        <h1>Fan art activist critic</h1>"sexual deviant art, ...molesting
        children and family dog. Subjective judgement, erase history. Do you
        support people taking matters, 'into their own hands?'" statue of
        Bristol in Shakespere's the tempest," art is separate from the office,
        moral deciency{/*, Greek statues*/}." "Dodgy statue now that what we
        know of eric gill," sprite"
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1w5RObJcAIMZstFHD2lfo3M6UhCIktebK/preview"
          }
          float="left"
          title=" (GBNews) - Future of ststues and Wordpress site https://americanvotersalliance.org/ with_seb_gorka"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Those aren't legal things to do, nor is there is no reason to keep
        statues for that you wish not to idolize, at least to satiate your
        bloodlusting-sin-scrifices. I can only imagine your perogies.
        <br />
        <br />
        Durable trade per capita is actually the same year to year but downwards
        to diminishing returns.
        <br />
        Equal access to non-unique concurrentables, regardless of worth.
        <br />
        <br />
        <a href="https://carducci.sh">Nick Carducci</a>
        {space}- policy-drafting software-developer & microeconomist
        <br />
        "Is ethics relevant in economics?"
        <br />
        <br />
        I imagine a microeconomist saying, “do not touch the trollie-lever,” in
        the trollie-problem, to save the more people as to keep allocation right
        and true, and macroeconomics saying, “that dog won’t hunt,” about
        microeconomists of the anti-rent-seeker and -Free loading actual labor
        shortage borne demand ilk…
        <br />
        <br />
        Comparative advantage tech advancement to lessen GDP/hour as durable
        trade productivity, does right align with virtuosity in the bona fides
        of the microeconomic mantras. Macroeconomists don’t know which way is
        salvation (we actually consume the same, from time to time, only price
        changes, due to said actual labor shortage by expiring premiums,
        estimated claims, implausible landlord usage, and repo-cycle kept down
        payments).
        <br />
        <br />
        &bull;{space}Legal is of standing in this line of thinking, on EULA
        liability on the contractors’ due diligence of co-signatories’
        surrendered freedoms’ grounds becoming a third party donee beneficiary
        without consent, of Savers or labor as input costs, another property
        that more likely microeconomists would turn with me on as true, to be
        discounted in real, inflation, GDP even as basis by m2 collateral
        velocity if not BEA embedded in material, but not homes, equities,
        profits nor bonds, and gini or poverty, input-cost/income.
        <br />
        <br />
        <a href="https://carducci.sh">Nick Carducci</a>
        {space}- Statistician, Historian of Markets and Propaganda
        (2012–present)
        <br />
        "How nations history help to develop an ideology for that nation?"
        <br />
        Selective history only needs a single storyline, not necessarily the
        all-cause artifact, just one of them will do.
        <br />
        <br />
        "Leave us alone with his opinions,” the only opinion Elon has given is
        to take on debt and stop subsidies, in a prisoners' dilemma, you cannot
        exactly, “practice what you preach.”
        <br />
        “I’ll room with you, rent-out our lease on the lease on the lease of
        grandma’s flat."
        <br />
        <br />
        "I want bartering, with goats and things, ...[yeah, I'm serious ]like,
        'what a great job tonight, here are three potatoes,'" or it can be for
        science. Now THAT is communism. Not your progressive rent-seeking and
        gentrification.
        <br />
        <br />
        "Why do some governments insist in the war against drugs?"
        <br />
        It is an artifact of a conflict of interest, licensure closed source,
        expert-saveface lest malpractice. It is also a currency competitor, sdr
        that which doesn’t necessarily have debt but transaction fees &
        full-reserves, no-scripts.
        <br />
        <br />
        “It’s a big deal,” what’s a big deal, the whole fucking economy is a
        “big deal.” But no one is over eating per capita, are you? I don’t care,
        it isn’t even a modicum plurality what you do, I wouldn’t even get you
        to desist lies for reasonable doubt of 1 or whatever you can poll of
        industry-variable{space}
        <a href="https://froth.app">11/12</a>.
        <br />
        <br />
        <Cable
          style={{ height: "240px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/7qc1ycom0j51lvk/Screen%20Shot%202022-01-16%20at%206.38.18%20PM.png?dl=0"
          }
          float="left"
          title="Headliners (GBNews) - a bit of a plea bar loss moot flop for hypocrisy v actually describing for informed intent and all-inclusive consent"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "We don't judge people on ethics, before we treat them, but that's the
        way it goes, yep." it is a racket when you pay without their choice.
        Dumbass brit tory gbnews slime young propagandis token, I am worried,
        yoou need a labotomy and be charged $2k/day. "That's why medical
        treatment cannot be discriminatory," How about 11/12 consensus science,
        douchers... "If they drink to much, treat everyone regardless of the
        decisions they made in life," YOU ARE SAYING IT IS AN EVOLUTIONARY TRAIT
        WEAPON YOU DUNCE
        <br />
        <br />
        "What is authority, and who has authority in the US?"
        <br />
        <br />
        Power is granted by reason which may show precedence as illegal, and a
        Preamble is why intention of the law is so described of this phenomenon
        of law, by comparative innocence, natural law and hypocrisy as virtue
        for war. So in my speeches I mention Tranquil society in the
        Constitution as grounds for Article 4 scope of receipts and outlays, and
        Amendment 13 and Amendment 14 Section 1, not social security Medicare
        pensions 38% of $4t/yr 40% debt spending and expiring premiums, that
        which is surrendered freedoms (EULA, third party donee beneficiary
        claimable) Section 4 stock-gain-funds trust, Free Rider mutable, and
        making Free Rider Immutable sewage (negative correlation for mortality,
        gravity toilets, no-toilet-India), police (ween conflict of interest off
        net loss bonds with Truncated Production Tax), and lawsuits. Duress, for
        minimal viable product for Tranquil society and voluntary trade, is to
        be described by 11/12 industry variable jury. Pay to discriminate on
        platforms, is the durable trade of comparative advantage and tech
        advancement, embodied.
        <br />
        <br />
        "Yay, sports!" Flo from Progressive, competing with consumers, maker of
        the delusional and bizarre, "Name Your Price tool, false bid pool." Give
        me more Joe
        <h2>Actually, GDP/p actually is velocity/yr or /qtr of collateral</h2>
        <h3>Not included in GDP, each place in time</h3>
        "Pay off investors to keep control of the company," collateral
        <br />
        <br />
        “You might think it is ridiculous, but you have no moral objective to
        stop people from taking objection to that [in business, by deduction or
        process operationally required or unfettered duress, only stated age
        (older), race, sex or gender (unless it is labor defined, which is
        nearly all)].” Connor Thomilson
        <br />
        <br />
        "Gallows, isn’t that childish? Well aware that he didn’t want to show
        child such a childhood thing, what values, all politics (reasonable
        doubt precedence is legal...). We are going to clean this up one way or
        another, farm equipment symbol, 100 angry people." comedy has a place in
        this conversation, but it shouldn't hide the fact that 1/6/2021 was
        dangerous, laugh about what we don't understand, like
        {space}
        <a href="https://thumbprint.us/voting">content-addressability</a>.
        {/**Jordan Klepper*/}
        <br />
        “To stop the steal not the patriots who stopped them." Shuffle to
        extrapolate! 1-yr isn't significant, overall! there is more variance,
        instance is one of many mosaics. Ween cops off bonds, with Truncated
        sales Tax, not conflicted interest Amazon stock gain pensions? Okay? Or
        else? Lexington meeting with muskets day soon to come up.
        <h2>
          "hostage crisis, mental health issues," wasn't he starving, are you
          saying it is part of a kink, british Jim Acosta
          {/**nick peyton walsh */}?
        </h2>
        <h3>
          "Assurances, actions, resources from government until security
          measures are no longer needed, G-d willing."
        </h3>
        "Why do socialists want to share the wealth but not the work?"
        <br />
        "You misunderstand socialism. Socialism is about sharing work. It is
        about workers being fairly recompensed for their labour. Of course many
        socialists are also in favour of helping those unable to work."
        <br />
        <br />
        Not the ones that see such as useless gentrification, demand by price,
        not consumption. Fixed costs are variable for including labor not just
        materials, so I call structures, startup costs instead, the Investment
        in the GDP Krugman mosaic, not the Bureau of Economic Analysis national
        tables,{space}
        <a href="https://froth.app">charted here</a>.
        <br />
        <br />
        "See what as ‘useless gentrification’?"
        <br />
        <br />
        *Useless gentrification *is debt-“investment,” as a caste of actual
        labor shortage borne demand; do you over eat? No. GDP/p 1800–1913 was
        not increasing amongst labor-competition elasticity, so population
        growth and scarcity is evidently not a problem. The problem of *useless
        gentrification* is that labor is part of input costs, and must be
        exclusively demand. These are my novel findings. Alternatives are
        required for reasonable doubt, so here are some: Truncated Sales Tax,
        p2p max-royalty, no general-income payday, await consumers, no
        implausible rental-income use above 5 condos + storefronts, 5 autos, or
        30 days (for hotels).
        <br />
        <br />
        "I didn’t mention debt or investment. What are you talking about?"
        <br />
        <br />I embellished my comment for you.. *gentrification* is a word that
        implies useless monopsony. Can’t you use google? If not, you probably
        shouldn’t be genuflecting on Quora.
        <br />
        <br />
        most disabled in U.S. is 65+, that is 19% of the population. They had
        their entire lives to save, and are funded by Amazon stock gains. If you
        want to help by stealing labor equity from others, you don’t speak for
        Marx, and his terms.
        <br />
        <br />
        <h3>
          “Homeless man has said he, ‘is G-d,’ then killed someone. Covid tests
          coming up.”
        </h3>
        <h2>
          It’s price what are you overeating or is it single year population.
        </h2>
        Not so when labor is exclusively demand, as it is an input cost of
        sprints, next to labor.
        <br />
        <br />
        "what to do about competing with the Chinese," 'conservative Curtis
        Sliwa', "Not a conservative but a populist, co opted by bannon and those
        on the right. Buchanan and Perot same borders."
        <br />
        &bull;{space}collective bargain only rollover
        <br />
        &bull;{space}plausible rental use is under 5 condos + storefronts, 5
        autos, 30 days
        <br />
        "Not willie nilly decide that the votes won’t count
        <br />
        They never hired me, I applied every day,” aren’t you a lawyer
        <br />
        Esquires are conflicted to withhold class precedence resolutions, that’s
        why they call slip and fall, economics.
        <br />I was demoted to police sci because GDP per hour is re erm
        self-deprecation, non-durable-trade, fixed being startup not invariable.
        GDP/p was nearly constant from{space}
        <a href="https://vaults.biz/gdp">1800-1913</a>...
        <br />
        ween the cops off net loss bonds with Truncated Production Tax, that is
        geohash/mo spoonable reported monthly from your pay tech of choice by
        protocol in transaction line.
        <br />
        <br />
        Not the state, capitalist, where business can choose their own rules.
        <h3>
          trade is not the surrendered freedom of others (EULA, third party
          donee beneficiary), await for customers to outlay, compound nor
          general-income payday
        </h3>
        Non-compete stock pension!
        <h2>
          Don’t trust three names because they want us to follow old kooks
        </h2>
        <h1>Team of uncounted science</h1>
        “Socialists,” was described as of Marxist-Communism by authorities that
        potentially didn’t kill, as life expectancy was low already, being the
        average age at death, 15m expected with population growth of life
        expectancy single year age in China and 3m in Russia, during their
        respective “famines.”
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          Communism deprives no man of the{space}
          <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
            power
          </a>
          {space}to appropriate the products of society; all that it does is to
          deprive him of the power to subjugate the labour of others by means of
          such appropriations.
        </div>
        Marx would call Progressives, Republicans, Socialist-Democrats, Greens,
        Labor, Peoples, and Libertarians, “market-communism” - he would be be
        {space}
        <a href="https://www.quora.com/topic/Saver-Party">Saver Party</a>
        {space}and support{space}
        <a href="https://occupywallst.quora.com/">Occupy Wall St</a>.
        <br />
        <br />
        “Expiring premiums for dental.” Curtis Sliwa
        <br />
        "suing me for $5m, from false bid pools is nothing what do you sue your
        mother, what is she mother dearest?"
        <br />
        <br />
        Not the ones that see such as useless gentrification, demand by price,
        not consumption.
        <br />
        <br />
        And input costs are labor, with material-consumption, in sprints;
        startup costs as well, there aren’t fixed invariable goods except
        natural resources, in a vacuum without labor.
        <br />
        <br />
        Overeating or population? GDP/p DOWN thru a time lens is productivity.
        <br />
        <br />
        USPTO rent-seeking government, if anything their work becomes science,
        "we are trying to protect the work we have done, and others have done.
        $500b in counterfeit goods (branded, OECD)." jobs, copy, science
        <h2>
          Dick "insane" Morris, "Recession is the only cure for inflation,"
        </h2>
        repo-cycle kept down payments is surrendered freedoms of Savers (EULA,
        third party donee), loitered and laundered, and there is grounds to
        reverse amortize, that wouldn't create steep corrections without
        adjusting income from credit as well, making no strife but all the
        repair. Retribute felony disenfranchisement.
        <br />
        <br />
        Bar-licensed Vinu Vargheese, forever interested in class resolution
        malfeasance: "no gov has right especially those who put themselves on
        the line." discrimination much? Why would business be able to? Consumers
        are more people tham business, and it is not an evolutionary trait
        weapon without taxonomy, only comes out...
        <br />
        <br />
        "Needed extraordinary care and insurance helped make that happen
        <br />
        This is a business not a charity."
        <br />
        I wouldn’t call expiring premiums a business, nor enabling care, you
        always get less than you put in unless insurance rolls over, which is
        non-compete and non-concurrentable, let alone is abject surrendered
        freedoms (EULA, third party donee beneficiary).
        <br />
        <br />
        $4-500k for a new liver (donated from healthy untimely end), because of
        insurance booning the bid, Amazon stock gain trust funded. Growth by
        population for input costs RETARDED uselessness, and actual labor
        shortage borne demand.
        <br />
        <br />
        "Most children in the hospital outputting covid is unvaccinated," PIC is
        still the same... It is just fraud. Why are you ignoring all-byproduct.
        Smallpox vaccine isn't correlated with mortality, sewage is, just look
        at life-expectancy of no-toilet-india.
        <br />
        <br />
        Tax fee income for life, "socialists want to Tax." that makes no sense
        <h3>
          Insider trading is legal if you open source... officials cannot have
          holdings, indexed nor blind trust. That doesn't remove bias.
        </h3>
        GOP, market communists, Joe Tobacco (Borelli, "no ivory tower without
        stake," is dollar not enough?), former short seller, self-proclaimed
        america's favorite paizan, "we should want people to be invested in the
        market concentration of Amazon, how m4a/social security and pensions are
        funded."
        <br />
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1sa2N8ZiC6ymw2ZL6hd2VQR3v24zDeKxo/preview"
          }
          float="left"
          title="Wise Guys (Newsmax) - insider trading is when?"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "You don't want to remove politicians from everyday people, preventing
        politicans from living like other americans, that creates other issues.
        Stocks the information is out before laws, I'm talking about material
        information. The laws make the moves... It is literally bias to vote a
        certain way, and not for the dollar."
        <h2>
          "American surrendered freedoms (EULA) in insurance, lenders and
          landlord actual labor shortage is a G-d-given right"
        </h2>
        <h3>
          we will make america strong wealthy proud safe united great again, by
          having Tax breaks for Amazon stock, to fund our pensions/medicare (38%
          of $4t/yr +40% debt spending) with capital gains.
        </h3>
        "Bring marxists to a screeching halt, red wave, democrat socialists out,
        to the polls, 2024 take back house and senate, so import. 2024 take back
        whitehouse, jobs for family (retarded), fair trade for american workers
        (tariffs for broad utility?), fair trade from american workers, end
        catch and release, chain micration, these people have to share our
        values, love our country, not blow it up. They must love our people.
        China virus trillions of dollars in damage. Break up big tech and
        restore Free speech, constitution, second amendment, judeo christian,
        biden crime wave in Dem-run cities, crack down on viiolent criminals,
        support law enforcement, no shape or form, ban CRT, restore patriotic
        indoctrination, honor our partial history, and respect the flag. BAN MEN
        FROM PARTICIPATING IN WOMENS' SPORTS.
        <br />
        <br />
        If you don't fund military, we will tariff. Woke executives, so much
        debt, AT&T, cannot carry, because people told them not to. If we did
        what they do to Republican companies, ...it's just not nice. I will not
        say, 'boycott AT&T,' I promised Robert. I ended Russia pipeline, but now
        they will be selling oil all over Asia. 10m's we don't want in our
        country, they work with their hands. What they are doing to traffick
        women and children, iss horrible, but{space}
        <a href="https://youtu.be/A2kSh0A8Ad0">
          there is a solution by The GReat Nick Carducci
        </a>
        . ...Sanctuary cities liable for crimes, ending crime. No idea where
        they come from, what their ideology is.
        <br />
        <br />
        ...If you dont have a doctor, we pay for it, expiring claims, republican
        leaders who don't believe in that Marxist idea of price elasticity, that
        saved so many veterans.
        <br />
        <br />
        Checks to illegals, you know, you paid for trust ppp. democrat socialist
        reappropriation of labor equity and gentrification, government owns
        monopolies instead of target margin by industry variable 11/12 to
        control duress of finite business 'choice.'
        <h1>
          open cesspool of illegal working age pouring in on a daily basis."
        </h1>
        Why would Dems "add ineligible votes," instead of just make up voters?
        "Only if you are sick, really,{space}
        <a href="https://goo.gl/maps/YgQqetqfscownfvA7">a note from a doctor</a>
        ."
        <br />
        <br />
        10yr jail makes a lot of money for bonds, if you Truncated Production
        Tax, Trump may lighten sentances, $2k/day. Great.
        <br />
        <br />
        sewage gives life, look at no-toilet-india life expectancy
        <h2>
          Marx died 1888; 15m excess average age at death single year expected
          Great Leap Forward.
        </h2>
        "The left is discriminating life-saving therapeutics based on race, if
        you are euro you won't get vaccine nor antibody-graft. Racist government
        tyranny in the truest sense of the world."
        <h3>
          hardest country to deal with is not china, russia, but the united
          states
        </h3>
        "Leave those children alone with powerful immune system
        (immunocompromised is oncogenic dysregulation antibody debris
        collection; 'virus' does not spread, it only comes out), leave our
        businesses alone (voluntary trade means 11/12 industry-variable),
        american health choices are non of his business, we can make our own
        health choices. 'I want $1k/test,' Biden is scared and does whatever
        they want. Incapable and incompetant, if you think about it. Least
        deadly (excess life expectancy age has passed, so{space}
        <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
          you are claiming time-to-time correlation as cause
        </a>
        ), we have to bring our lives and country back, rather than resume our
        ppp trust. Nmo idea what is happening, big pharma is making a fortune
        from American people with the help of washington bureaucrats. We are
        done with mandates/trust-building now that I'm out of office."
        <h1>4 YEARS TO GRASP AT BROAD USPTO CLAIM STRAWS</h1>I am the only one
        to make the connection between comparative advantage, technological
        advancement, less work and lower prices, or, *durable-trade*,
        productivity is GDP/hours downwards, in contradiction to what OECD
        {space}
        <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">says</a>,
        even though GDP is collateral velocity/yr or /qtr by basis, uncounted by
        BEA.
        <h2>
          Mandate Madness: saveface lest malpractice Amazon stock gains is m4a
          funds
        </h2>
        "Hospitals made a brand new record," that's what happens with constant
        population growth. "If we had an honest press, that would have been a
        lot different," 12m+ than 2016, 2myr+*4 total. Tranching election
        results will survey bias like that. SWING VOTERS STAY HOME!
        <br />
        <br />
        No because population labor cost will become more competitive, **unless
        it is a natural resource, then it will** (1800–1913 nearly constant
        GDP/p amongst 3%/yr+ population).
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/kdj1410nxk629xp/main-qimg-bd259fa9094d791e38b484c1cd89d13d.jpeg?dl=0"
          }
          float="left"
          title="https://fred.stlouisfed.org/graph/?g=KKxy - https://vaults.biz/work"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Manufactured goods, while price elastic after Production, has elastic
        input costs, just the same. Actual labor shortage of rent-seeking, debt
        spending or monopoly/monopsony/Free Rider mutable Tax duress will make
        labor-competition eating the costs of scarcity, less{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KKxy">elastic</a>.
        <br />
        <br />
        "secure border" jim lamond to block working age? profit is an input
        cost, I like trump, not his retarding-policies.
        <br />
        <br />
        Turning point/Newsmax/Trump: “Our pocketbooks are hurting and our jobs
        are hurting,” those are opposites, as labor is an input cost. "20%
        18-34, men, hispanic for Biden,”
        <br />
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/1y362v7d5irr6bg/us%20spending%20debt%20king%20trump.jpeg?dl=0"
          }
          float="right"
          title="Trump debt king 2017-2020 federal deficit spending - receipts, Free Rider mutable, beyond article 4 scope, sewage police lawsuits."
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Tom Basile continues, "Trump Reduced taxes, (he raised spending, kept
        Tax) stopped abortions (mandatory testing?), stopped expiring claims
        NATO.
        <br />
        <br />
        His most critical{space}
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          quote
        </a>
        :
        <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
          "Communism deprives no man of the power to appropriate the products of
          society; all that it does is to deprive him of the power to subjugate
          the labour of others by means of such appropriations."
        </div>
        Much like contractor due diligence lest liability of{space}
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          surrendered freedoms
        </a>
        {space}of your customers by:
        <br />
        * Invoices
        <br />
        * expiring premiums
        <br />
        * implausible landlord use, and
        <br />
        * repo-cycle kept down payments
        <br />
        Alternatives include:
        <br />
        1. rollover, concurrentable, competitive (adjusted for time constraints,
        concurrentable) insurance (legal ponzi not transitive-property
        input-cost pyramid scheme) really, expiring premiums defunct
        <br />
        2. rental-income cap by 5 condominiums + storefronts, 5 autos, or 30
        days for hotels
        <br />
        <Cable
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/7Jy9JyrukCY"
          }
          float="left"
          title="1800-1913 nearly constant GDP/p - https://youtu.be/7Jy9JyrukCY"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Gay, won't hunt, took his own life, after being slandered. Mothers’
        sisters’ son. Sean. 95’ VU
        <br />
        <br />
        3. Truncated Production/sales Tax spoofable protest precinct
        geohash/month reporting to accounting software from your choice of
        paytech, in transaction line (for article 4 scope Free Rider Immutable
        sewage police lawsuits only, and not funded by capital gains of market
        concentration creating a conflict of interest between the public and the
        people they serve, not compete with, but for, in industry-variable jury
        and commerce, to which electronic tolls and Motor Vehicle photo ID Free
        Rider mutable should suffice voting as well
        <br />
        <br />
        "If you want to have money, you need vaccine, more indirect mandate is
        why U.S. SC said do whatever you want to your consumers," Ameer Beno.
        <br />
        <h2>border supply-chain inflation crisis.</h2>
        Kelly Loefler: "Americans are struggling with rampant inflation, input
        costs for farmers and rent, buying groceries, blue collar boom, economy
        that lifts up all americans' working hours and expensiveness for the
        same actual consumption. ...All of America can see what 1-party rule
        does, until broadband/bridge tolls' fees laundered to debt service and
        bond laundering."
        <br />
        <br />
        You can only build a boat, diversify because retail traders uuid anon
        not the same as 13D {">"}5% holders nor holders’ abstain official unlike
        non-voter default, “no.”
        <br />
        <br />
        edit: context is GDP/p 1800–1913 being nearly constant (amidst 3%/yr+
        population), hardly know. Actual consumption is the same, GDP is
        counterproductive from time to time, then. GDP/p downwards is
        durable-trade.
        <hr ref={this.props.gdp} />
        <GDP
          lastWidth={Math.min(600, this.props.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        In GDP/hour-GDP/p GDP is a rate, so it is not exactly unchanging, 1, but
        1/y if x is money velocity over time, and then a graphical
        representation of GDP/hour is A derivative is a rate of x hour per y
        gdp, another is minus x people per y gdp, and so it is how that
        derivative, not variance from mean, but disparity, has changed over time
        as another plane so actually y/z, x being time.
        <br />
        <br />
        "build a boat, diversify because retail traders uuid anon not the same
        as 13D {">"}5% holders nor holders’ abstain official unlike non-voter
        default, 'no.' Huh??"
        <br />
        <br />
        “build a boat:” diversify, because retail traders’ anon-uuid is not the
        same as 13D {">"}5% holders (portfolio is seen, you may otherwise be
        correct in your asset-weighting), and-without* holders’ abstain official
        unlike non-voter default, “no.”
        <br />
        <br />
        socialist globalist china v amazon pension stock, abstract last value
        traded non-unique equity-share
        <h2>"I don’t fault you, serf"</h2>
        Virion omicron will multiply rapidly.
        <br />
        Only by cell mitosis does it spread, it does not infect. "Biden looking
        feeble, lately." Expert jury system we have here, should be industry
        variable 11/12 Saveface lest malpractice “‘Fake vaccine is a felony,’”
        fines state vic. "Let the majority prevail! Protect the right to vote
        from all try bond index fund and pension Amazon stock holders, foreign
        AND domestic!” Biden.
        <br />
        <br />
        Second inaugural plural majority loss. nyc is greatest because the voter
        turnout is so well detesting, [what is it 7%]65% is pro Occupy/saver
        anti-rent-seeker, but 73% 50+ don’t wanna rollover doctor, mechanic,
        nanny hours. 19% disabled + 85% (25-54) max fruits/copy sacrificed,
        GDP/p down is dutable trade.
        <div
          style={{
            backgroundColor: "rgb(80,50,100)"
          }}
        >
          'Pandemic budget “t’”s and “i’”s “I’m interested in closing prisoner
          get cannabis up on its feet. Cannabis if I didn’t already mention
          that. G-d willing a lot more fruit being borne with more expensive
          time to time same actual consumption discounting all input costs that
          includes labor and profits, bonds, double and triple material.
          Property taxes, we will continue at it.
          <br />
          ...When I signed the bill work in progress, big step, not done,
          acknowledge decision between woman and her doctor, period. That is
          still a big deal.'
          <h2>
            Let alone they are non compete and non concurrentable Non-rollover
            loss is the surrendered freedom loss, so ‘drop dead.’
          </h2>
          '... Adult use of recreational cannabis for social justice and
          currency competition, pharmacy cop trust.
          <br />
          <br />
          ...Listening, a lot screaming out for help, G-d willing we can change
          their lives, even if 1/3 majority of the state don’t agree with either
          Republicans, Democrats, faux Socialist rent-seekers, Greens, Peoples.
          <br />
          <br />
          ...[Some journalists can be a ]dog with a bone, very deep, can't shake
          it, dispropoirtional stay on one theme than other sets of focus, like
          gentrification of libraries for debt service bond laundering. I don't
          spend a lot on the legacy point and maybe that is a shame on me. We
          want a strong and healthy nj for the next leadership team, they are
          who they said they would be, nj strong jersey attitude, sense of
          pride, any of those innumerable metrics I would abide by.'
        </div>
        <br />
        Compound general income significance less with more variance 2019-20.
        <br />
        Homeless are allowed to loiter? I envision a six flags type of cubbies
        outside the shopping malls, cap implausible landlord use storefronts +
        condominiums (5), autos (5), or either for 30 day non-competes…
        <br />
        <br />
        nothing to do with eachother, when you allow insurers, landlords and
        lenders to have actual labor shortage borne demand by non-rollover
        non-concurrentable expiring premiums, GDP/p 1800-1913 was nearly
        constant, amongst 3%/yr+ population growth.
        <h2>Truncated Production Tax, a flat Tax's flat Tax</h2>
        Amazon stock gains velocity is GDP and pension funds, that’s why
        Catsimitidis doesn’t like AOC, $12k/64 new debt/cash per person a year.
        <br />
        <br />
        FDA-approved trust, prosecuting tiny pharmacies willing to open their
        ingredient lists and keep the same name.
        <br />
        <br />
        "Inflation compels some gold investment; Tax-protected IRA," is last
        traded parcel value, not-concurrentable, "they cannot confiscate our
        wealth." Is that{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KTGD">2%/yr+</a>?
        <br />
        <br />A labor perspective is a business one, we share an input cost and
        corporate profits are a flaccid loss. Practice what you preach in a
        prisoners' dilemma.
        <h2>
          insurance is surerendered freedom of your customers, lest rollover
          hours on call, your very own doctor slave (non-concurrentable,
          non-compete)
        </h2>
        <h1>m4a/insurance is funded by stock-gain-funds.</h1>
        Competing with consumers beyond industry-variable duress of minimal
        viable product, career advice statutary guideance and benchmarks.
        <br />
        Ability to use their latent talents on corporate profits of their fruits
        instead of their own uncounted in GDP copy, science.
        <br />
        <br />
        Competitors talking aback Djokovic. "No cost to the taxpayers."
        Accidents are incentiviced by insurance expiring premium scheme to
        launder surrendered freedoms of your customers, surely. "Unduly
        lienient, just have GDP from jailing $2k/day." Indebting/"putting"
        billions and millions into broad utility, startup/"fixed..."
        <br />
        no bail nor jail without evidence.
        <br />
        “Programs with the state where they hire them.” Any way to launder cash
        to the 187.5x debt Why is it not a drug addiction if you do it like
        Kudlow?
        <Cable
          style={{ width: "100%", height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/itj6bvo9zvafvnx/Screen%20Shot%202022-01-15%20at%205.15.39%20AM.png?dl=0"
          }
          float={null}
          title="RCV - https://vote.nyc/sites/default/files/pdf/election_results/2021/20210622Primary%20Election/rcv/DEM%20Mayor%20Citywide.pdf"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        why wouldn't you actually give your second vote, not expire final, at
        least... I was worried about that
        <Cable
          style={{ width: "100%", height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/gk78gobivw6t21t/Screen%20Shot%202022-01-15%20at%205.17.16%20AM.png?dl=0"
          }
          float={null}
          title="General Mayoral 7% turnout - https://vote.nyc/sites/default/files/pdf/election_results/2021/20211102General%20Election/00000200000Citywide%20Mayor%20Citywide%20Recap.pdf"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <Cable
          style={{ width: "540px", height: "700px" }}
          onError={handleScollImgError}
          //img={true}

          src={
            this.props.nofred
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=KTep&width=500&height=600`
          }
          float={"left"}
          title="public debt to spending to gdp to private debt per person - https://fred.stlouisfed.org/graph/?g=KTep"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h1>
          This guy literally tells you he shot her for money, and you say it is
          emotions. "Cured in a mental hospital with any choice of meds."
        </h1>
        <h2>
          working for what? what is the right's obsession with psychiatry? it
          doesn't do anything except make money for your sponsors.
        </h2>
        <h3>
          "He rambled on incoherently," that's just like, your opinion, man. "I
          know, I've had conversations, that caused psychosis and led to pushing
          a lady into the subway train." "How to treat weak and vulnerable, ...
          how to allow or cultivate those who need help."
        </h3>
        "trying to get herself a better life, she was of age to have a job." WHY
        WHEN $12k/64 new debt/cash per person a year gluttons of people 50+?
        <br />
        <br />
        "his soul has been posessed by drug demons," susan, you sound like you
        had a seizure so I'm not going to take life advice from you. drugs are
        fun, not the cause of violence. "We need a homeless system to help
        people when they are down on their luck, Glenn wasn’t helped by the
        gentrification." How about cap rental income at 5 condominiums +
        storefronts, or 30 days for hotels...
        <br />
        <br />
        "Talking people down, and seeing nationally," and threatening arrest
        without bargaining, is a problem. Kash Patel: "Only way off most wanted
        is kill or capture. ...Prosecute fullest extends of the law." If
        precedence is to guide the law then there is no use of lawyers.
        <br />
        <br />
        "impoverished disenfranchised social outcasts. different stories of
        horror and disgrace. reach people with their eyes and hopefully their
        wallets. We are all priveledged, and entitled." yeah, by stock gains as
        funds forced social security. we can have had a lot more without
        lenders, landlords and insurers. I was raised to build a home and sell
        it. I know there is a lot of work hours to be saved by keeping equity to
        labor.
        <br />
        <br />
        "Veterans facing severe{space}
        <h3>mental health challenges</h3>, identiy issues,
        <h3>housing</h3>, cognitive disorders," sounds like a racket you cannot
        prove. Are you fucking tarded Losac?
        <br />
        <br />
        EZFLOW doesn't care about science if virion injects DNA into cell, they
        will appease your wildest confirmation bias delights and delusions.
        <br />
        <br />
        "A little electric shock." Just put him in jail. Do you have a kink?
        <h2>
          the criminal himself throws away the $100 he killed someone for,
          telling you the economy is fake, and you have the gaul to say you want
          more expensive homes?
        </h2>
        “Lower economic development, lower home values, crime spikes.”
        <br />
        Homes are only more expensive because of debt spending, not population
        growth, because GDP/p 1800-1913 nearly constant amidst 3%/yr+
        population. YOU, Bernie Kerrick, are the reason why people have a reason
        to fight. "Only $100," oh, would it make more sense to your Republican
        ass if he got more? $12k/64 debt/cash new per person a year. What
        "breaks?" $12k/64 debt/cash new person per person a day “I don’t think
        people can be reformed, early punishment.”
        <br />
        <br />
        "Pay packages from capital gains funds people are going to be upset, now
        is not the time for the conservatives to be conservative. Show REAL
        political leadership."
        <br />
        <br />
        "400 years of slavery f u all amerikka is going to burn!" - The last
        elder son. How did you expect him to react?
        <br />
        <br />
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1cQpjIODetmZIu8uZ8ja_TQjpO8Hw5HHm/preview"
          }
          float="left"
          title="Rob Schmitt Tn (Newsmax) - Rich Grenell on Nato investment obligations expiring"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “We are rewarding Germany whom aren’t paying their 2% obligations.”
        Doesn’t the funds rollover, or did you invest it in Amazon stock? 2% of
        GDP, that is velocity of m2 mutual funds per year or quarter (Amazon
        stock, homes collateral).
        <h2>
          GOP solves monopoly by trust by gov? I’ll target margin operational
          monopolies
        </h2>
        I like illegals, 1/4 share working age FL gonna say GDP is a good thing,
        counterproductive non-durable trade , academic economics…
        <br />
        <br />
        We actually consume the same stuff time to time, discount GDP for actual
        labor shortage of rent-seekers… expiring premiums, implausible landlord
        use beyond 5 condominiums + storefronts, or 30 days for hotels. That’s
        how you stop business from “failing.”
        <br />
        <br />
        Repo cycle kept down payments is surrendered freedoms (EULA) of Savers
        beyond article 4, receipt and outlay scope, treasonous monopsony Free
        Rider mutable, making Immutable mutable and war, war crime. The right
        likely want to make payday loans of current debt. Would take 44 years
        somehow income on current debt…
        <br />
        <br />
        P2p max-royalty and equities concurrentable rollover will do, not
        non-compete hours of expiring premiums. It’s crazy, our GDP is
        collateralized m2 mutual funds’ velocity per year or quarter, social
        security funded by Amazon stock gains. That’s why GOP mad about AOC
        stopping gentrification
        <br />
        <br />
        Trump had 4 years and couldn’t stop broad USPTO utility claims, just
        tariffed for less comparative advantage & tech advancement…
        <br />
        <br />
        "If people want, they can take a Tax voucher elsewhere, that expires."
        Rob Schmitt "Right back in your pocket." Why does it ever leave, to
        invest in Amazon stock? as GDP m2 mutual funds constitute?
        <h1>
          I have already told the government about these issues, they do
          nothing.
        </h1>
        <h2>I told my university and they demoted me to poli sci from econ</h2>
        “There are more black billionaires than anywhere in the world.”
        <h2>
          “Incitement to or against lawful authority,” like net operational loss
          bond profit? Before any confiscation of private property for public
          "utility," too 'broad utility' would be grounds.
        </h2>
        Thomas Sowell loves expiring premiums.
        <br />
        Need to rollover to not surrender freedoms (EULA) of
        co-signatories’/your customers and employers. Insurance Medicare social
        security is stock gains as funds. Bottom left because swing
        anti-rent-seeker is Dem 40%/10% GOP, all non-voters that I will bring
        out{space}
        <span role="img" aria-label="bottom-left white-circle squirrel">
          ️↙️⚪️🐿
        </span>
        <br />
        <br />
        Etymologically, transitory is a passive-adjective to a
        “transitive-property.” Jerome Powell has asked for more time to define
        the term. I believe the media is portraying the term incorrectly, as
        U.S. BEA does with “fixed” structural investment as startup, rather,
        discounting renovations, then. Input costs are a transitive-property of
        input costs, and that includes labor, profits, equity gains and bonds
        compounding over their collaterals’ principal, for an actual labor
        shortage over the same actual consumption, having a strange non-linear
        and curious relation between three factors of hours worked, GDP/p, and
        price. If exogenous defactorization and regression can use 1800–2020,
        GDP/p thru time shows 1913 rose price of out velocity of trade, by basis
        of m2 mutual fund stock gain and home as collateral, let alone
        residential structures for rent and expiring premiums for healthcare
        being largest part of PCE, $2.7t each.
        <br />
        <br />
        65% is pro-Occupy/saver anti-rent-seeker, but 73% 50+ (nj 101.5 poll)
        don’t wanna rollover doctor, mechanic, and nanny hours. Let alone they
        are non-compete and non-concurrentable.
        <br />
        You can only build a boat, diversify because retail-traders uuid anon
        not the same as 13D {">"}5% holders nor holders’ abstain official unlike
        non-voter default, “no.”
        <br />
        <br />
        Menendez wants to cancel or bailout, I want to reverse amortize
        (cash/debt)*income every year back…
        <br />
        Force abstain holders, unlike non-voters default, “no.” We need
        13D-retail anon uuid now.
        <br />
        <br />
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1UMbNL1ehsXyQJuN1RuV5e_yBvFKQpYDm/preview"
          }
          float="left"
          title="StinchField (Newsmax) - Topher Field, 'We aren't weapons! But vaccines work! 2020 was a pandemic!"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Victorian Police are attacking us with predoliction of domestic
        terrorist," well it comes from somewhere, but more likely than an
        evolutionary trait weapon for no use, it is byproduct, not cause.
        <h2>
          "there has never been a pushback by the leftists, against these
          leftists."
        </h2>
        <h3>
          The right would rather government debt than Truncated Production/sales
          Tax.
        </h3>
        "The banks reported good profits today. Where did they come from? The
        economy is bad. Or is the Fed still printing money for the banks by the
        trillions via this 'Quantitative Easing' even as inflation surges?"
        <br />
        GDP is mostly m2 that is mutual funds, collateralized by home, so it may
        be best to start thinking of{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KSJ3">
          GDP and profits as some kind of debt
        </a>
        , not checking. QE is market-ask share-split if state land depositary
        dollars, not new issues, which the actual lenders compounding or
        actually earned as actual labor (hardly the case with $12k/64 new
        debt/cash per person a year) have to pay for 40% debt spending/deficit:
        this is likely why the Fed is deleveraging from the Treasury, especially
        when I am prosecuting dollars v bonds surrendered freedom (EULA, third
        party donee beneficiary), expiring premiums, out-of-scope government
        rent-seeking and implausible landlord use beyond 5 condominiums +
        storefronts (not a price cap, but quantity, and days, 30, for hotels).
        <br />
        <br />
        I really cannot figure how $4t/yr 40% debt spending only produces $2t
        checking (a.k.a. CurrencyComponentOfM1).
        <br />
        <br />
        mv1===mv2==GDP/yr shouldn’t be true, but it is. M2 is mutual funds +
        (checking a.k.a CurrencyComponentOfM1). That is all we know! I have
        components of GDP&nbsp;<a href="https://froth.app">here</a>, PCE next to
        “fixed” structural investment, that I prefer to call startup costs…
        <br />
        <br />
        "We are wondering what is going on in her angry, confused, brain."
        Stinchfield.
        <br />
        <br />
        "Restaurants that didnt get funding are accumulating personal debt for
        landlords." implausible landlord use is surrendered freedom (
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          EULA
        </a>
        ) of consumers. Tom: "Employees are getting sick, we need help.
        restaurants will die out in pretty large numbers if we don't get help
        soon. Bunch of rapid tests available for our staff, from input costs.
        There is a backlog on rapid tests."
        <h2>
          personal choice impacts us all, mis/disinformation on your shows
        </h2>
        <h3>desist by 11/12 and permit 1/12 reasonable doubt</h3>
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1N5H20mXEpv_79mMGjvzxk0mGDrUvPII0/preview"
          }
          float="right"
          title="Carl Higbie Reports (Newsmax) - Chris and Jeff, slandering Joe, covering for Greg Kelly (scared)"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Only does an industry-variable jury keep saveface lest malpractice
        doctors in check! "Public domain utility" won't stop operational
        monopoly from being trust just for government, and it isn't as
        strong/broad of an argument/claim as quid pro quo/voluntary trade of
        minimal viable product duress found by an expert jury.
        <br />
        <div style={{ backgroundColor: "rgb(30,50,90)" }}>
          Single year life-expectancy-age, of 1942 births, in excess year to
          year - recession; insignificant variance, is wider, when using more
          {space}
          <a href="https://humanharvest.info/polio">data in your series</a>
          {space}than 2019-20.
          <br />
          Do they expire? Where there is demand, there are entrepreneurs. That’s
          why government historically only deals in Free Rider immutables!
          <br />
          It doesn’t infect, it has no taxonomy, only comes out and isn’t an
          evolutionary trait weapon, and immunocompromised is the medical
          exemption (oncogenic dysregulation).
          <br />
          Mitosis is not vivo, and whatever caused paralytic polio garners the
          same prevalence of multiple sclerosis.
          <br />
          So the likers outnumber angry face for both sides of the issue.
        </div>
        <br />
        “He doesn’t know the difference, his state of mind is declining,” “he
        hit his head.” 1/3 of ideological dredged voters won, discounted for
        unauditable magnetic data.
        <br />
        <br />
        We consumer the same actual things, from time to time, the GDP needs to
        be discounted for homes because it is the velocity per year or quarter
        of the principal as collateral.
        <h2>
          "Covid is not a global killer, stop terror. ...Pfizer stock exploded."
        </h2>
        <h3>
          Citi bank: "If you are not vaxxed, you are all fired," I think this is
          to unroll actual labor shortge of rent-seekers, because of my call of
          their 'business,' actually being the surrendered freedoms of Savers
          (EULA, third party donee beneficiary claimable)
        </h3>
        "We were on the front lines of the covid pandemic." "Mhm. We know
        omicron{space}
        <span style={{ textDecoration: "line-through" }}>
          isn't correlated with
        </span>
        {space}lowers symptoms with boosters."
        <br />
        <br />
        Disability should be called injury, so there is no racketeering to
        launder to deficit spenders in lenders, landlords and insurers.
        <br />
        Mark Levin literally calling Amazon stock m2 mutual fund home
        collateral, cash
        <h2>"Monthly savings, actually saves money on car insurance,"</h2>
        <h3>expiring premiums?</h3>
        'America first' is retarded, not actually helps. Tariffs for USPTO vig
        (THAT DIDN'T EVEN WORK, you cannot stop broad science trade secrets).
        Trumpo is not conservative, he loves debt: thinks GDP/hour is
        productive? That is not durable-trade, the ends of microeconomic Supply
        and Demand comparative advantage tech advancement. 'Jobs,' instead of
        less work isn't patriotic, it is actual labor shortage busy-work,
        chores/entrepreneurship/innovation uncounted Hell. Keri Lake, "America
        first, Arizona first, we need to move the rhinos out of the party,” he
        trust built with ppp! Fruits laundered! 20%/yr+ debt spending! Desist in
        saying his policies are conservative and good for America! "Tremendous
        vision for the American people," he had 4 years...
        <br />
        <br />
        "n95 mask for painters," is not for long-duration, bacteria must be
        released. "time to have progressive capitalism in the covid lockdown.
        ... Couldn't imagine delta nor omicron, greater chance of not getting
        seriously ill with the vaccine." It comes from somewhere, as it stands
        now the virion taxonomy is an evolutionary trait weapon.
        <br />
        <br />
        <Cable
          style={{ height: "380px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Y7gbpxYVNOGyHGg9A1WweFLrmj5WMilo/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) - Victor Davis Hanson Stanford Hoover Fellow"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Free shipping, anything prohibiting from voting," deep state Sean
        Spicer. It is not Free Rider Immutable, if it were it would be called
        taxed. 'Postage' is Free Rider mutable from outside the market, useless,
        and network-operational-monopoly doesn't need to be owned by the
        government, but by private investors who have margins, quality and
        duress, targeted, by an industry-variable jury 11/12. Login.gov ID costs
        $25 for safety, G-d knows the margins, and now a deep state
        Trump-supporter wishes to rent-seek on voting?
        <h1>redundant</h1>"faster, omicron taking over before delta can even
        try, antibodies already attack. Sharper, faster puncture, though we
        have't seen it happen in vitro, let alone vivo vacuum (without
        bacteria)."
        <br />
        <br />
        Kamala Harris: "Erosion of the rights invested in the American people."
        <br />
        <br />
        Mario Diaz Balart: "It’s divisive, ugly, from the disastrous year, first
        time for him to remember peoples’ names. That requires people to turnout
        and voting."
        <h2>
          All parties are pro-rent seeker, so non-voters are a default vote,
          "no," your power requires consent, and non-voters won as a 1/3
          majority, 65% of all people are pro-Occupy/Saver.
        </h2>
        First responder recordings captured on that day is made to educate, and
        nourish the Lucky expiring claim payday. Kudlow: “Russia IS going to
        invade Ukraine.” Why? “I want stern actions on the economic front,
        because Russia has a weak economy. We should be selling Ukraine tanks."
        Why? Is Ukraine state lands on top of natural resources? "If things are
        going south, you need to borrow people and hire some people. Biden is
        just letting it go, doesn’t realize how bad the situation is. now
        approval is below the outside temp in DC.” "Is the president aware of
        his surroundings?” Why don’t you ask him instead of slander him, you
        fixed whale. “Larry Summers is against government spending, he is a
        heavyweight, national security advisor, chief of staff, clean house, not
        leftist, now moderate, Clinton did that." I’m going to stick Kayeks’
        Road to serfdom up Kudlow’s ass, NEXT CHANCE I GET
        <br />
        <br />
        "5th column attacks greatest tragedy of the 21st century." Fucking looks
        like me! "...told to put flyers out, and employed say, 'the war hasn't
        yet begun, well post the photos and it will.'"
        <br />
        <Cable
          style={{ height: "280px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/xresco45aev7fgj/Screen%20Shot%202022-01-14%20at%205.03.33%20PM.png?dl=0"
          }
          float="right"
          title="Appreciate America (Newsmax) - The Fifth Column (justice from liberty, unity, equality, and the fifth one), 'Red for courage, White for honor, Blue for justice.'"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Funding[ defunct] anti poverty (input-costs/income excluding assets)
        programs. Acute pandemic phase, we are going to talk with two saveface
        lest malpractice guys. ...We are sacrificing training standards to
        fulfill quotas for pensions and also fund with capital gains, as GDP is
        homes’ valuations by debt’s collateral."
        <h1>
          GDP/hour downwards is durable-trade, upwards is counterproductivity
        </h1>
        <Cable
          style={{ height: "400px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Oo58SZvJYjRL8-RCpQXribqw37DW3xmY/preview"
          }
          float="left"
          title="Eric Bolling (Newsmax) - brown Brown U Prof, Occupy Democrats (Facebook) - ECUF, LAV, LCCHR with K.Harris"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “I understand why you would classify a death as covid, because there is
        a lot of money to be made saved.”
        <br />
        <br />
        "That war tested america, the greatest generation, if they wouldn’t
        fight back in forcing their income to invest in Amazon stock for gains
        to fund Social Security fund." Prohibiting trade, market-communism,
        communism being industry-variable jury to designate business-consumer
        minimal viable products' duress. "Don't let them brainwash you, they've
        done a good job in brainwashing."
        <h2>
          More data in series makes for{space}
          <a href="https://humanharvest.info/polio">
            a larger p{"<"}.05 variance
          </a>
          .
        </h2>
        Like his personality not policy so I would pat on head.
        <br />
        Population scarcity ruined cities only because of actual labor shortage
        borne demand of rent-seeking, as evidenced by GDP/p nearly constant
        1800-1913.
        <br />
        <br />
        "checked by camera, popular Guess-on-sale belt matched, same headphone
        placement, case closed! Criminal mischeif with a knife, he tried to kill
        somebody with a knife," wouldn't it say that? "And he has severe mental
        problems, his family was failed, at every level." If you continue
        $12k/64 new debt/cash per person a year I will do the same to you, and
        the punishment is funded by operational loss bond profit, so how can we
        trust the City as a people? "I would go nuts for two days," says Rudy to
        Lidia (mortgage-wife), "you're right, cops outside, 'there is nothing we
        can do.' Leave cops to their devices and they will do good."
        <br />
        <br />
        "Totally socialist and partially communist," can you define these in
        your head, Rudy? Mass accrual is a currency and durable trade
        productivity of less work and GDP/p per hour, and more durable trade.
        <br />
        <br />
        "A country is changing from a planned economy into a market economy.
        Which factor of Production will most likely be scarce and in high
        demand? Enterprise Money Labour Land?"
        <br />
        Likely healthcare, market concentration:proprietorship, profits, and
        broadband/bridge operational network monopoly.
        <br />
        <br />
        <Cable
          style={{ height: "400px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1-s_E0IG9Z8sTSbTlEiklaWN6nCONSstX/preview"
          }
          float="right"
          title="Johns Hopkins U (Facebook) - humanharvest.info/polio"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Vinnie: "If you are mental, I get it, get treated, otherwise, get death
        penalty." How do you diagnose "mental?"
        <br />
        <br />
        Charlie Kirk: "Your membership in Amac will support the ask price of
        input costs that we all share, expiring claims necesarily takes more
        than it can give back. You have homeowners' insurance for a good reason,
        because if you have a fire or flood, you have financial disaster,{space}
        <a href="https://qr.ae/pG3gUx">you need the same thing for title</a>."
        <br />
        <br />
        Vaccines are getting the job done, rooster claiming credit for the
        excess single year life expectancy age recession. "90% less fatal and
        90% of cases, it's not an emergency for the deficit spenders, we
        shouldn't hide in the basement, safest place to be is in a school," says
        Rudy Giuliani, slave-driver and retarded (of durable-trade GDP/p per
        hour downwards) economic policy purveyor.
        <br />
        <br />
        Dominic Carter: "Don't blame society for these animals, that is why we
        are in the situation we are in." I wonder if that Burger King shooting
        is because of debt/cash $12k/64 new per person a year? "They performed
        their hjob in a professional capacity and brought this Killer to
        justice," Eric Adams.
        <br />
        <br />
        2-5 negative asymptomatic testic, "vaccines only protect you, not
        stopping the spread," says Heather Childers. Doesn't it come from
        somewhere? Or, isn't it an evolutionary trait weapon for no gain that
        only comes out? Neither of those can be true, so it must be a
        non-all-incidence artifact of sickness, non-exclusive byproduct, or
        bacterial-reinfection. It is more acute of a lower respiratory and brain
        flaccid paralysis debris, after all.
        <h2>vaccine passports/mandates are a minority opinion</h2>
        "What about people that have already lost their jobs," says Heather
        Childers, prohibiting price changes on Savers' account. You just want
        Amazon stock to be bought by social Security and distribute gains as
        funds, to trust build. "Federally funded institutions can mandate
        vaccine," says Bob Sellers.. You need to prove it is a mvp required
        duress to an industry-variable jury... not saveface lest malpractice
        experts and character assasinaation as evidence or double jeporady.
        <br />
        <br />I think sanctions themselves are incentive to make a false flag
        false flag, Russia and U.S. both profit from it. Army wouldn't fight if
        Truncated Production/Sales Tax instead.
        <h2>
          GDP is in the interest of the country because it is a number that
          includes gathering foreign state land depositary
        </h2>
        "Her name is now synonomous with Biden's stalled agenda, 'Kirsten
        Sinema'" non-voters won plural majority.
        <h2>
          I am all about protest, and I do not trust the government since Obama
          hope to stop finance
        </h2>
        “Intention is very clear, intent was to stop the peaceful transfer of
        power, with no guns, on the basis of guns makes this a very strong case
        for the government.” “I hope this will shut up, undoubtedly,” Judges can
        be wrong.
        <br />
        <br />
        YOU DON'T PROSECUTE SHIT, dijacimo. I'm not going to work for fucking
        Caesers
        <br />
        <br />
        Disability can only make you do the job you did before. Bartending is
        the only job that at least deals in cash, even though that is borne of
        debt/Amazon stock gains or cash advance. I will apply to my own
        principals, and have given up. These people are just brown folk, wasting
        my time for actual productive things, that don't get counted in GDP
        (chores, copy, science), only busy-work does (actual labor shortage
        borne demand), non-compete no less.
        <br />
        <br />
        Why can't I deal drugs? I share my ingredient lists and maintain review
        boards of the same name.
        <br />
        <br />
        "Making sure you are not left behind, nor left out," says Biden, "high
        speed internet, power grid, capping pipes," these investments of a
        bipartisal plural minority agreement is without the consent of
        non-voters, without a candidate, as Libertarians are rent seekers and
        are ok with government in debt... Why can't you jail led pipe purveyors?
        Isn't that 11/12 scientific-consensus as quality, duress, margin
        industry-variable business-consumer besting of minimal viable product
        for voluntary trade and Traquil? Fredricka Williams
        {/**Abby Phillips */}: "With infrastructure, it is a slow crawl, can get
        it into the states, but people don't feel it for quite some time."
        <h1>Gentrifying Biden & Trump</h1>
        Bill O'Reilly: “82% cable, 97% internet for those in poverty
        (input-costs/income, excluding homes). Take that socialism, Biden’s
        epitaph ‘america is unfair in the economic realm,’ is malarky, it is a
        lie.”
        <br />
        <br />
        <hr ref={this.props.potholes} />
        “Where the investment needs to go to improve our infrastructure,” what
        public infrastructure is there except Free Rider mutable healthcare?
        Tolls for bridges can be automatic, and there is no need for 40% njta
        debt service.
        <br />
        <Cable
          style={{ height: "280px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1bTZoeYZZbwqaGLBknHkBt6duqs2SCD8a/preview"
          }
          float="left"
          title="John Bachmann Now (Newsmax) - Rick Crawford Agriculture shill"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "commoditiy prices are up, but what about the input costs?" Their gains
        are input cost... "people need good jobs, 'I don't mind 3 jobs, but I
        would rather not have one paycheck for 3 jobs.'" Progress of beyond
        sewage, police and lawsuits is not by more money, for the same Free
        Rider mutable trade, that is contant for everyone in actual trade,
        discounted for price increases by actual labor shortage in demand.
        $53b/1.2t for roads and bridges, $60b broadband rent-seeking and
        gentrification for bond laundering, makes Free Rider Immutable
        target-margin network-operational-monopoly, mutable.
        <br />
        <br />
        Workers are also people that chore or work for their own copy, exchange
        doesn’t mean productivity.
        <br />
        <br />
        Support economically like more money for the same stuff, we actually
        consumer the same tuff and durable trade is GDP/p per hours worked down
        <h1>the currency of GDP is mostly Amazon stock with m2 mutual funds</h1>
        Pensions forced corp investment social security trust, most disability
        is 65+
        <br />
        <br />
        "great insurance companies are paying for their own test." Dr. Raju with
        John King discussing expiring claims, surrendered freedom (EULA) of
        co-signatories' customers and employers. That is grounds to rip your
        face off.
        <h2>
          Make Free Rider Immutable military mutable when 40% debt spend war
          crime (not virtuous incentive).
        </h2>
        <h3>
          the first hospitalizations reported insanely, PIC overall have
          insignificant changes per capita year to year. omicron and virus has
          nothing to do with the cause. it is byproduct
        </h3>
        "Delta is less than 2% of hospitalizations than omicron, according to
        CDC," both hit, it is redundant non-exclusive byproduct, of bacterial
        reinfection, with no significance beyond 2019-2020, nor an evolutionary
        trait weapon if it only comes out.
        <h2>Republicans are calling stocks, cash</h2>
        My party is all men. "now social security is on the calendar," it is
        corporate stock gain funds... GOP loves, "infrastructure," bond
        laundering bridge tolls, nationalizing network operational monopolies
        instead of target margining is GOP. "Pre-ording vaccines," they expired
        on the shelf, usually insurance expires non-compete, non-concurrentable
        hours. Ordered more than demand isn't even a bargain anymore, even when
        concurrentable units.
        <br />
        <br />
        "Worker participation has never been lower,” before 2000 25-52 was 60
        now it is 80. Biden didn’t order enough tests, why can’t people buy them
        themselves? You can eradicate byproduct but not cause, smallpox was
        removed by sewage, paralytic polio has same cause with non-exclusive
        byproduct as Multiple Sclerosis. Single year life expectancy age growth
        is “the pandemic.” Can you eradicate it or is there people that “catch”
        it with the vaccine? Kilmeade and his guest talking out of both sides of
        their fotches. $4-6t dollars, checking is only $2t.... (R) California
        State Comptroller Lonnie Chen.... what an idiot. "Frugal fiscal policy,
        more money, education." What? Don't you want to use $2t to pay off $88t,
        with a checking velocity of 1x/yr? "It is more of a treatment," it
        either works or not. 75x/vaxxed to be hospitalized doesn't count all
        incidence of sickness. "Blaming things being gummed up in the Senate, on
        the GOP." To gentrify with government? "Can Americans afford the cost of
        living, groceries and gas, is it going up?" Homes, equities, bonds,
        labor and profits are the cost of living. GOP thinks inflation 2%/yr+
        1x1 checking:people is more than 18750% new debt/cash. "People actually
        working (for someone else) in labor." but you don't count it in
        inflation. "Huge numbers of open jobs, a lot of people quitting," you
        need to add the new hires for a wash...
        <br />
        <br />
        Rich Grenell: "America first,&nbsp;
        <a href="https://www.isidewith.com/poll/488729614">
          consensus science first
        </a>
        . ...Negotiating with these sick people, credit is haram, saying to not
        play as Iblis, 'just works.' no freedoms at all, England should stand up
        and remove Iran from the UN. they are threatening us, deal with it,
        goodbye, if you are with these people you turn into them."
        <br />
        <br />
        <hr ref={this.props.party} />
        leisure by scientific contributions, chores and copy?
        <br />
        <WageAge
          lastWidth={Math.min(600, this.props.lastWidth - 20)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        we consumer the actual things per year, but evidently just prices change
        <br />
        <br />
        <a href="https://www.census.gov/data/tables/time-series/demo/income-poverty/cps-hinc/hinc-03.2014.html">
          census household income by cohort
        </a>
        <br />
        <br />
        "You’d have to get a reverse mortgage to get a parking space because of
        these hipsters and millennials."
        <br />
        If Curtis gets 37k votes, is that the amount of listeners or do no one …
        agree.
        <br />
        "Insurance rakes you over the coals and take all your money," now we are
        talking. Doesn't sound very much like a description of a business or
        voluntary trade/Tranquil competing for consumers, does it? Takes more
        than it gives back (not-quiveringly)?
        <br />
        <br />
        Mark Meadows: “Use talents elsewhere, jobs for corporate flaccid profit
        instead of earning and keeping your own copy, or contributing to
        science. ...A good week for freedom! Reclaim out country for our
        freedoms! Science is catching up with the Biden administation, hostility
        towards the unvaxxed isn't backed up by the science. Policy works for
        non-voters, turn against Trump is just not going to work, nothing to
        work for the future, just punish Trump and all of his allies." He made
        20%/yr+ on his way out, precedence, by ppp trust and tarrifs to China
        for NO SUCCESS on USPTO, which is a waste anyway. GDP is bullshit, for
        it doesn't account for elderson care, working for your own fruits, not
        for the rentier-freeloader.
        <br />
        <br />
        “Card what you need to know, sit outside all day long for health[, they
        love it],” slippery slope? What do you have to hide?
        <br />
        Slander by judge?
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/TjvqmfDvOfQ"
          }
          float="left"
          title="nj 101.5 - steve trevalese being taught working age participation and continuing claims"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h1>
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">
            three months later
          </a>
        </h1>
        “Desperate to do the job because nobody wants it,”{space}
        <a href="https://fred.stlouisfed.org/series/LNS11300060">
          85% is the limit of 25-54 working age participation
        </a>
        .
        <br />
        <br />
        Socialism is anti-rent-seeking market communism, or the traditional
        communism. laborless-borne-demand, actual labor shortage. We work
        (discounted for actual labor-shortage-demand) and consume (discounted
        for price of ALL input costs, equities, bonds, labor, profits and homes,
        double the rate of inflation, time to time), the same actual goods, but
        the price changes.
        <br />
        <br />
        “Auction for yea.” Always ask first, except for the bookies - to slicken
        the market up.
        <br />
        "Let me walk through it for my audience, and then we have a record of
        it, sort of a blockchain situation,&nbsp;
        <a href="https://ipfs.io/">irrefutable proof</a>."
        <br />
        “And journalists are too lazy to look into it to see if it was{space}
        <a href="https://youtu.be/Jxj0-TaTm4o">a setup</a>. ‘It’s a put on!.’ I
        like it, Sacy.”
        <h2>Tranquil and voluntary trade</h2>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Ir63i9VZr19v4B5tEP8FnbJSaNg1TFt3/preview"
          }
          float="left"
          title="Cortes and Peligrino? (Newsmax) - Jody Hice on government being so small they do nothing about duress uneccesary for mvp"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Jody Hice: "Socialists and communists, whom love
        <h3>
          industry-variable jury of 11/12 to dictate business-customer
          relations.
        </h3>
        “We are a freedom loving people, limited government, …[the opposite of]
        socialistic ideology to the core.”
        <br />
        "They are the ones that want to make a banana republic in the US."
        America first is NOT exports for foreign share-split lands…
        <br />
        <br />
        compound and general-income is surrendering anothers' freedom (EULA),
        you must only sell industry-specific, p2p 1-level board.
        <h2>
          "dangerous socialism, leaders pushing a radical agenda," to do what?
        </h2>
        "What's the difference between Neo-Marxist economics and post-Keynesian
        economics?"
        <br />
        <br />
        I was going to wait to answer for discrepancies between their root forms
        and “Neo,” or “post,” but I will instead just describe Marxism vs
        Keynesianism.
        <br />I was turned onto Marx by Schumpeter, who describes Marx as brash
        and poetic, sarcastic, and this has been his public relations fault.
        Keep in mind he never showed how his theory would work in actual policy,
        and died 30-something years after his 1848{space}
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#%3A~%3Atext%3DFrom%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          manifesto
        </a>
        .
        <h2>
          “Communism deprives no man of the power to appropriate the products of
          society; all that it does is to deprive him of the power to subjugate
          the labour of others by means of such appropriations.”
        </h2>
        This was after the early-19th century pogroms, the rest of his book is
        using dry humor of sarcasticdefamations of the word, “property,”
        labor-borne-demand notwithstanding, a true end to bonds, expiring
        claims, implausible landlord use, and repo-cycle kept down payments as
        property!
        <br />
        <br />
        Keynes, on the other hand, is concerned with funding the deficit. Marx,
        would wish there were none. Yes, the other answer is eloquent in calling
        Karl Marx’s anarchist, anticorporatist “market-communist,” government,
        provisional, as per Free Rider Immutable, Article 4 reigns, would surely
        suffice him, and with industry variable jury in determining the duress
        required for minimal viable products, along Tranquil and voluntary trade
        lines, on surrendered freedom (EULA) due diligence of the contractors’
        liability for tort and reverse amortization of debt “investment” by
        (cash/debt)*income every year back, grounds. I would assume his stance
        on capping rent by 5 units or 30 days, not price, would jive with his
        immediate outlay from corporate profit, flaccid collective loss
        thinking, as well. Very much can I envision Marx rolling over in his
        grave to the idea of nationalizing bridge/broadband fees instead of
        target margin, duress and quality (jail the led pipe network operational
        monopolies), INSTEAD of state victimization fine/bribe, as Keynes might
        endure for selfish growth of non-durable-trade (GDP/p per hour), the
        very opposite, reciprocally, of the comparative advantage technological
        advancement ends of LESS{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KQRA">work</a>
        {space}and LOWER{space}
        <a href="https://fred.stlouisfed.org/graph/?g=KQRx">input costs</a>
        {space}by settled trade, that which Marx was a big proponent of,
        especially for commodity currency no-script sdr depositary to overwhelm
        the dollar-share of state lands in significance.
        <br />
        <br />
        In short, Marx wrote of the credit-cycle, and you might call
        Occupy/saver anti-rent-seeking, 65%, neo-Marxism, without the stigma of
        the genocide that used his name after his death.
        <br />
        <br />
        Strangely, however, 15m excess deaths were expected from single year
        life expectancy age growth over the Great Leap Forward, similar to what
        has happened with this “pandemic!”
        <h2>
          "Food increase per capita since 2010?" Stinchfield thinks people are
          eating more this year, per capita.
        </h2>
        "Is inflation going to make 2022 a tough year for the middle class?" 5
        years to double hours per average last traded unique parcel home, 10
        bonds debts checking, 20 home prices, 40 inflation. 3/2020- 20%+ from
        2010–3/2020 $4t/yr+.
        <br />
        Inflation doesn’t account for, in real GDP/p m2 Amazon stock mutual fund
        Social Security forced investment velocity per year or quarter, poverty
        input cost/income, nor gini, homes, equities, bonds, labor nor
        profit/margins. We are at maximum working age participation 80–85%
        25–54, so there is not as much working age to make up for actual labor
        shortage in laborless demand by rent-seeking:
        <h2>
          73% 50+ nj 101.5 reports pro-AARP expiring claims, half 2.8m
          continuing claims are 65+, and most of disabled,
        </h2>
        <h3>that which constitutes 19% of the whole population.</h3>
        “...bleed the patient to death, so blood pressure drops; enough
        stimulus, but not too much, ‘take away punch bowl when the party gets,
        started,’” as to mean when interest rate hikes end...
        <br />
        "Can’t find the things I want, what I couldn’t find before, like living
        in the Soviet Union, everything being rationed out.” 3m Great Famine was
        expected life expectancy single year cohort size growth, excess.
        <br />
        "Free markets always work, wage controls price controls opposite of Free
        markets, brace ourselves.”
        <br />
        <br />
        "So Dick, recession or not?" "Yes, with&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=KQWZ">
          $12t new cash sloshing around
        </a>
        {space}(he must be talking mutual fund pension/medicare expiring
        claims/social security corporate stock, m2 velocity per year being GDP)
        , stop people from spending surrendered freedom by raising interest rate
        (like bail/bribe).
        <br />
        "Inflation raising, interest by suspending market-ask outstanding by
        share-split, only cure is heart attack.”
        <br />
        <br />
        Blind hours is not productivity, watch your own kids, pay for your own
        schools. People are working less since 2000 25-54 age cohort 85% cap,
        but more work isn’t necessarily a good thing, not durable-trade, and
        single age might show why 25-54 caps at 2000.
        <br />
        <br />
        Removing all companies from conflict of interest in their roles, leads
        to
        <h1>
          CEO wholesales with 1-level board max-royalties, after materials AND
          labor as input costs.
        </h1>
        “[$444k] {">"} general military, subagency HHS. Suit twice to 51 pages.
        1200 pages, are you kidding me.” Andrzejewski, openthebooks.com on
        Stinchfield. Even each transaction can be approved by a board (this
        one), or{space}
        <a href="https://scopes.cc">sprints can be for contractors</a>.
        <h2>the dollar is market-share of ask first, after all</h2>
        78 single age life expectancy age growth excess is only year to year,
        2019-2020 requires less variance of death rate to be significant, it is
        insignificant if account for, mortality lessening from sewage
        withstanding, 1999-2020.
        <br />
        GDP is per capita m2 mutual fund velocity per year, that is mostly home
        collateral.
        <br />
        $44t, in fact; GDP can be measured as velocity, of that principal, per
        year or quarter. Anger is not partiality... Technically illegal
        precedence. Fauci blind trust/index is not unbiased. "What a moron,
        jesus christ, make a request before the hearing."
        <br />
        <br />
        The credit cycle is true, implausibly deniably impossible without
        Savers, in the words of Mark Levin: “Fundamentally destroy our republic,
        ‘Communism deprives no man of the power to appropriate the products of
        society; all that it does is to deprive him of the power to subjugate
        the labour of others by means of such appropriations.’” Precedence is
        technically illegal, the rules don't need to change, Tom Cotton does
        (his diaper).
        <br />
        <br />
        medical conditions, bringing the infection to a group," uh it is the
        weather and the room, not the people. you would need a vacuum vivo and
        1cell/day mitosis of bacterial-reinfection is not that... Wolf Blitzer,
        "Trying to rewrite history," injecting DNA into cell is an assumtpion to
        fit the hypothesis! prevalence can mean byproduct, not cause, that is
        reasonable doubt! You have no power as a business to duress vaccines in
        your minimal viable products.
        <br />
        <br />
        4m doses of therapeutics that have been available, thanks to
        entrepreneurs, not the administration.
        <br />
        The cause is obviously bacteria, and the excess is single year growth of
        life expectancy age.
        <br />
        Antibody generation coincides with warning mechanism or 20% placebo by
        the Cold project, just garbage collection, unless you think virion is an
        evolutionary trait weapon, because it only comes out…
        <br />
        “ will next spring be down,” you hope for the best, and prepare for the
        worst.” You say 2019-2020 is significant, retard.
        <br />
        Next few weeks will see cases suspected non-exclusive, as expected from
        expiring claim misappropriation of funds.
        <br />
        <br />
        Economic freedom implies third party donee beneficiary of surrendered
        freedoms first, with industry-variable of non-character assasination
        evidence, nor state vic torts net loss bond profit.
        <br />
        <br />
        Monica Crowely: "inflation back at emergency levels," ppp trust was
        fraud too" thanks to the trump years, of course there would be
        inflationary pressures.
        <br />
        <br />
        "Painful to get us out of this downward cycle," why wouldn't you reverse
        amortize instead of payback 44x/cash debt 2/3 private? "Give americans
        their own money back. Keep Tax cuts in place, you might see economy
        might stabilize a bit," to excess year to year? We want to have durable
        trade and work less GDP/p per hour down.
        <br />
        <br />
        Dr. Seigel: "1918 The Great Flu: 'Didn’t affect the lungs upper
        respiratory only,'” but Pfizer says bacterial infection is{space}
        <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
          diagnosed by acute
        </a>
        &nbsp;lower lung respiratory condition.
        <br />
        <br />
        "Federally funded healthcare," facilities 40% debt spending AND
        non-rollover non-compete non-concurrentable hours of doctors/mechanics,
        now nannies?!? also by Amazon stock? 38% medicare and pensions, just m2
        mutual funds? GDP is m2 mutual funds homes and equities, why not
        discount in real material inflation? Labor and profits are input
        costs/income-and-wealth, too!
        <br />
        <br />
        Why would business be able to claim the power of minimal viable product
        business-consumer duress designations by industry-variable jury of
        11/12, do not desist 1/12 reasonable doubters, unless they are paid
        writers
        <br />
        <br />
        <h1>need more data in the series than 2019-2020</h1>
        <h2>
          shuffle before extrapotation calls/tranched results to suspend survey
          bias, too
        </h2>
        <h3>
          rcv 1/3 will lose, what is the threshold to count the second choice?
        </h3>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/10X0x6OZLGX_DQVtreXaP9Chvr9wC2mfS/preview"
          }
          float="left"
          title="Spicer & co (Newsmax) - mandates for healthcare funded corporate share expiring claims"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "If you keep people out of jail with bail/bribe, they are going to do it
        again and again."
        <br />
        <br />
        trust by Tax is out of scope article 4 receipt method Article 1.8
        bond-tax and spending scope: geohash/mo spoofable to protest your
        precinct, reported by your paytech
        <br />
        <br />
        only way out of donee claimables without allowing producers to keep it,
        is reverse amortization, not cancel nor bailout, as Menendez wants.
        Voter 2025 Nick Carducci Truncated Production Tax, (cash/debt)*income
        every year back. I was there for the Tyree catch!
        <br />
        <br />
        _: “you are crazy,” isn’t scientific, and emotions are rational and
        normal. Crime is a crime, insanity is irrelevant, subjective and a
        racket! So you can take it like a clap back. Say “rollover insurance,”
        to an orthopedic surgeon and they will lock you up as a political
        prisoner in nj for 13 days. It has happened to me, on no grounds and if
        there was, no trial. Just an expiring claim by insurance RACKET! Illegal
        by surrendered freedom (EULA) of co-signatories’ customers and
        employers! Mental health is not the cause of homelessness, and drug use
        is as prevalent as those in accidents, per capita, not for alcohol.
        <br />
        <br />
        "Sorry for your bad experiences ... But I will have to agree to disagree
        with you on this one. People turn to drugs because of mental health
        issues unless they become addicted through treatment of another ailment,
        even then I will defer there is usually a mental health issue underlying
        it all. Sane people don't live homeless in the streets by choice
        usually....just saying."
        <br />
        <br />
        _: it is only because of rent seeking, evidenced by GDP/p 1800-1913
        nearly constant amongst 3%/year+. Drugs are fun. Walgreens/cops license
        for gentrification by gov. Open ingredient list will stop their excuses
        not to/continue licensure, racket jail. 10x hours per home (average
        traded value) since 1970 is 5 years to double, and not because we spend
        10x more per capita (hours and population is nearly fungible as basis
        for econometrics). It is an expected result that people are homeless
        with rent seeking, beyond plausible use of 5 units or 30 days (for
        hotels), debt income, $12k/64 debt/cash new per person per year as “free
        market,” making homes exorbitantly expensive, how can you expect people
        not to be angry. 65% are pro-Occupy/saver anti-rent-seeker. Emotions
        have nothing to do with it, and neither would it if they prefer it. You
        just want to racket incarceration with 40% debt spending for either
        expiring premiums in healthcare, or bond laundering in municipalities.
        Can even blame it on bridge toll nationalization for this 40% debt
        service in 50% debt spending nj, 1/3 public and private debt, all
        surrendered freedom of Savers, that is $2t CurrencyComponentOfM1 vs $88t
        debt. And you say it is emotions? You need a brain scan, maybe a
        lobotomy
        <br />
        <br />
        _: even dentists are in it for the expiring premiums, you have no right
        to psych hold.
        <br />
        <br />
        "So you are saying ng the majority of the homeless are so because of
        greedy landlords?...NOT their own choices in life?"
        <br />
        <br />
        _: GDP/p 1800-1913 nearly constant says so, amongst 3%/yr+ population
        (it is just maths). Population growth doesn’t make scarcity, therefore,
        and high prices * long ACTUAL work days is because of actual labor
        shortage dead weight, not labor-borne-demand, Free-loaders (build a
        house, then sell it for competing for consumers, not with, lest be
        anti-trust prohibiting trade prosecuted), by implausible use landlords
        (cap 5 units or 30 days, not price caps misappropriation), non-rollover
        insurance, and other surrendered freedoms (EULA, third party donee due
        diligence onus on the contractor for co-signatories’ customers and
        employers, and Savers in general, is already illegal, technically).
        <br />
        <br />
        absurd tuition prices, reason why is perverting the market of
        general-income and compounding surrendered freedoms (EULA) of Savers,
        co-signatories' customers and employers for the due diligence of
        contractors to not knowingly rent seeking labor demand by actual labor
        shortage in demand.
        <h2>practice what you preach, in this dilemma?</h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/YXKigPyw9n4"
          }
          float="left"
          title="https://youtu.be/YXKigPyw9n4"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h1>
          I will not fuck those that refused the guns ("to their heads") to take
          others' money of prisoners' dilemma to afford with USELESS debts,
          MENENDEZ DOES/WILL.
        </h1>
        "$1.7b cancelled traunch student loans, blue city blues are known for in
        socialist cities, more Chris Salcedo, NEXT!" Implausible deniability of
        intention to tranche losers and price gouge winners, instead of waiting
        for consumers for accrual, when they actrually have ownership of what
        they are promising, 1-level board max-royalty profit, with standing.
        BALANCE OF NATURE IS NOT THE BEST ON THE MARKET BECAUSE IT TAKE CREDIT.
        (not a money market but DEAD WEIGHT BOX of actual labor shortage borne
        demand). Navian
        <h2 ref={this.props.geohash}>
          I studied market{space}
          <a href="https://qr.ae/pG3Zpg">propaganda</a>
          {space}at JHU; republicans and libertarians would quicker pay debts
          than truncted Production Tax and reverse amortization
          (cash/debt)*income every year back. Await, don't ensure win by
          competing with consumers, compete FOR consumers: 1-level (p2p)
          max-profit royalty, as with 3% under $2k geohash/mo paytech to
          accounting software spoofable to protest precinct, for sewage
          (negatively correlated with mortality, not vaccines 1905 smallpox),
          police (ween off conflict of interest state vix net loss bond profit,
          consumers pay before arrest), lawsuits of industry variable jury
          11/12, PAY 1/12 REASONABLE DOUBT TO DESIST
        </h2>
        Tenney: "some call him a populist, made his promises, and kept them,"
        20%/yr+ def spending by trump.... market communist ppp trust, for
        landlord, lender and insurer Amazon stock promises of surrendered
        freedoms (EULA) bailout by share-split of us, very third party donees
        beneficiary of our own checking.
        <br />
        <br />
        Not taking credit for ticket sales, as doctors/mechanics shouldn’t
        expire premiums, nor NJ Consumer Fraud Act estimates claimable…
        <br />
        <br />
        Not, not for non-exclusive && required/necessary.
        <br />
        Collective bargain is not an expiring claim or just a union account:
        need to rollover and non-compete; ​doesn't represent workers: "​good
        benefits like expiring premiums."
        <br />
        you never get back more, it is corporate investment surrogate, no less
        truncated sales Tax 3% under $2k, flat-Tax's flat Tax, no Free Rider
        mutable government gentrification/monopsony, equity
        proprietorship:corporate profit account flaccid collective LOSS
        <br />
        40% debt spending Free Rider Immutable becomes mutable... treason of
        article 4 scope by am14 section 4 over section 1 by forced corporate
        investment in Amazon Stock by 38% (2012) Medicare and pensions
        <br />
        FL gonna claim 1/4 share illegal GDP growth it Desantis and shoot him as
        VP to Trump debt king Into the sky! ppp trust
        <h2>​bring in the dancing lobsters!</h2>
        trust by Tax is out of scope article 4 receipt method and spending
        scope: geohash/mo spoofable to protest your precinct, reported by your
        paytech
        <br />
        <br />
        only way out is reverse amortization, not cancel nor bailout, as
        Menendez wants. Voter 2025 Nick Carducci Truncated Production Tax,
        (cash/debt)*income every year back. I was there for the Tyree catch!
        <br />
        <br />
        "mandate, now we have more of a crisis with healthcare workers,"
        compared to excess pandemic by 78 75-79 2015-2020, or 1970 6-to-1000
        hospital beds now 1:1000
        <br />
        <br />
        now we got parent ccc trust goin on
        <br />
        <br />
        kids watching their parents in school in the future, for trade secrets,
        it's nuts!
        <br />
        <br />
        Glass Steagall will prevail Saver Party
        <br />
        <br />
        "If every country has debt, is it true that a country can run without
        debt?"
        <br />
        **Reverse amortization required to prevent laundering to past
        surrendered freedoms (EULA)***, third party donee beneficiary
        claimable.* Yes, I have designed one bearing existing grounds, namely
        Article 4 scope as to receipt method and outlay scope: * geohash/mo
        spoofable to protest your precinct reported by your paytech following
        nat. industry-typing protocol. * Truncated Production/sales Tax, “*a
        flat-tax’s flat-Tax,*” for Free Rider Immutable sewage police lawsuits
        and no 40% debt spending making Immutable, mutable operational loss
        making bond profit, state-victimization and conflict of interests. The
        grounds are also implied by{space}
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          due diligence liability in EULA surrendered freedoms, of contractors
        </a>
        .
        <br />
        <br />
        “Nobody could afford a house,” GDP/p rising DOES count homes by
        collateral, so inflation should count homes, labor is an input cost, as
        is equity:proprietorship concentration! Profits and bonds… expiring
        premiums and estimated claims, all surrendered freedom and self
        depreciation for actual labor shortage laborless-demand, more of a
        dead-weight box over price deflation of all input costs per hour
        <br />
        <br />
        The right thinks national defense impedes personal freedom, with 99%
        antibody garbage collection of virion. "Secretary would receive
        healthcare Amazon stock funds, in the interests of people."
        <h2>
          mandating my semen (happy:covid) to enter my&nbsp;
          <a href="https://thumbprint.us/voting">copy</a>, different use case?
        </h2>
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/OqgUxnqc3AM"
          }
          float="left"
          title="virion frank morano - https://youtu.be/OqgUxnqc3AM"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “In healthcare institutions, but not large corporations,” prisoners’
        dilemma practice what you preach claim to resolve power of Vast National
        Significance. 76k federally front ran facilities (with expiring claims).
        Writing down non-rollover waste by medicate and private insurance with
        mutual fund gains as buffering losses. "Vaccinating 80m without supreme
        court precedent," you need to prove DNA is injected into cell because
        prevalence does not mean cause, but byproduct. You think evolutionary
        trait weapon, as it only comes out? "It does spread in schools and
        everywhere else people gather," bacteria is disposed by feces and
        spittle, maybe pores. That is the cause. It is something in the room.
        That doesn't vivo in a vacuum prove communication of communicability of
        communicable diseases. India life expectancy proves sewage is negatively
        correlated with mortality, not 1905 smallpox vaccines, especially
        counting 2.5m Multiple Sclerosis for 39k/yr+ 1951-53.
        <br />
        <br />
        <h2>
          'firing at a time when working age deficit?' republicans think
          trust/index fund removes bias
        </h2>
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1WcrjbGO7iUybsl0fXq6cB7xfS68oIl2b/preview"
          }
          float="right"
          title="American Agenda (Newsmax) - Thane Rosenbaum non-medical 100+ workers tossed by Supreme Court on general question precedence changing. 'Admin creatures of statute’ Jenna Ellis "
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Per capita statistician. Never has spread in a vacuum been without
        mitosis of already infected cell by bacteria (evolutionary trait to
        dispose in excrement feces/spittle, like antibodies garbage collect to
        prevent blood clotting of debris, NOT an evolutionary trait weapon as it
        only comes out).
        <br />
        <br />
        Prevalence per capita, significance 2019-2020 not the same as 1999-2020.
        <br />
        <br />
        Aging boomer deaths is a shortage of working age or too much
        rent—seeking actual labor shortage, self-deprecation, “the wave is here,
        come ride it with us,” Social Security forced Amazon stock (civility
        award) gain funds? "mass money printing is ca currency killer," as is
        no-script depositary and royalty contracts (max), Truncated Production
        Tax & amortization (cash/debt)*income every year back, implausible
        landlord use capped 5 units or 30 days and expiring premiums nor
        estimated claims, for surrendered freedom and durable trade being less
        GDP/p per hour than DOES count homes by way of collateral in m2 mutual
        funds + 1/11 checking (currencyComponentOfM1).
        <br />
        <br />
        “If they make it easy, maybe they will do it for you,” to pigeonhole by
        distress instead of anti-fraud.
        <br />
        “I love america, not so much the government.”
        <br />
        Stop Tax society. Inflation showing scarcity less emblematic of
        laziness, as we work and buy per capita the same (0 excess) year to
        year, when discounting for actual labor shortage, numerable by bond,
        equity, labor, home and profit inflation.
        <br />
        <div
          style={{
            backgroundColor: "rgb(80,30,60)"
          }}
        >
          Logan Raddick, "Josh Hawley putting forward legislation, 'suspend
          officials from owning/trading stock,'" blind trust or widell held
          index fund corporate investment trust.
          <br />
          <br />
          mayor of boston is a liar.
          <h2>
            2019-2020 might be significant, but not 1999-2020; ​even accounting
            for lower average age at death
          </h2>
          openings != working age available.
          <br />
          80-85% 25-54 is the cap. I want single year breakdown! I guess I'll
          try to see if BEA itself has at least 10 yr rather than working age
          designations.
          <br />
          industry variable business-consumer relations by duress of minimal
          viable product needs to permit, with evidence, not"injecting DNA into
          cell in instant," assumed to fit hypothesis. byproduct or cause.
          <br />
          sewage positively correlates with average age at death, just look at
          india.
          <br />
          <br />
          supply getting more test kits made, if there is demand there is
          entrepreneurs, there must be a USPTO problem, exclusively.
          <br />
          <br />
          {/*Jae Moon*/}
          <br />
          “​lol powell.. that dovish speech. 1% move on spy is like $500k for
          him.”
          <br />
          reverse amortize, don't cancel nor bailout, on surrendered freedom
          grounds (EULA, third party donee beneficiary), (cash/debt)*income
          every year back, dollars v bonds over parks, who wins?
          <br />
          don't need to nationalize rent-seek natural operational monoplolies
          networks and bridges, can be target margin.
          <br />
          <br />
          40% njta debt service...
          <br />
          this is where they make a joke of fungibility of depositary for.
          <br />
          <br />
          "savings accounts" bond index funds, commercial banks, credit unions.
          <br />
          definance means royalty max 1-level board (p2p) as outlays of schedule
          is NOT concurrentable as investment bank equities are.
          <br />
          m2 mutual funds velocity is gdp, largest components are $2.7t/yr each:
          rent and expiring premium claims "healthcare." rollover, doc!
          <br />
          Marx (1800-1888) - ending the credit cycle, "deprive[s] him of the
          power to subjugate the labour of others by means of such
          appropriations."
          <br />
          Talk about a straw man.
          <br />
          Froth.app I put PCE next to "fixed" or startup structural investment
          costs.
          <br />
          That's why I say Truncated Production instead of sales for delivery,
          3% under $2k, geohash/mo on transaction line, for sewage police
          lawsuits only, no more large item nor gift.
          <br />
          <br />
          Delivery tips Tax Free! not haircut nor bartender! part of the same
          transaction, after all.
          <br />
          <br />
          State victimization!
          <h2>Treason of article 4 (scope: receipts, outlays)</h2>
          Tax payer vaction amortize 40% debt spending to 99% lol SAVERS PAY.
          so, savers payee. ​I mean social security law is forced corporate
          investment and outlay of the gains.
          <br />
          <br />
          <span role="img" aria-label="bottom-left squirrel white-circle Free">
            ↙️🐿⚪️🆓
          </span>
          ingredient list
          <span role="img" aria-label="meds">
            💊
          </span>
          <br />
          poverty = input costs /income excluding capital gains, equities,
          bonds, homes, labor, profits.... how is GDP m2 mutual funds 11/1
          currencyComponentOfM1 per year or quarter, how mv1===mv2==GDP/yr if m2
          = mutual funds + checking currencyComponentOfM1? comparative advantage
          tech adv ends is lessGDP/p.
          <br />
          how $2t (-3/2020) currencyComponentOfM1 checking when %4t/yr 40% debt
          spending.
          <br />
          even market-bid of new tsy issues should make new cash but is $12k/64
          debt/cash per person new a year.
          <br />
          crashing markets should LOWER rents.
          <br />
          <br />
          input costs have the transitive-property of input costs.
          <br />
          <br />
          we should be working less to correct for actual labor shortage to
          useful.
          <br />
          <br />
          you know, build a house, sell it Have to define 1 before counting,
          shuffle before extrapolating a call for tranch results survey bias.
          SWING VOTERS STAY HOME 65% OCCUPY/saver ​gotta cap rental-income by
          unit (5 storefronts + condominius), not price. or days for hotels. 30.
          implausible landlord use intent deduced grounds, Tranquil, voluntary
          trade, surrendered freedom (EULA).
          <h2>
            1/3 non-voter &&{space}
            <a href="https://qr.ae/pG3Z23">Occupy</a>/saver.
            <br />
            <span role="img" aria-label="raining">
              ☔️
            </span>
            condos.
          </h2>
          I want my neighborhood pizzeria back!.
          <br />
          <br />
          no business, no problem! own storefront outright for no residential
          commercial structure rent seeking beyond plausible use (5).
          <h2>
            poor, little italian immigrants.
            <br />
            the best margins.
          </h2>
          I prefer practice what you preach in a prisoners' dilemma.
          <br />
          <br />
          exactly what's good for the goose is good for the gander.
          <br />
          abstain, or sell, nancy. blind or index is still biased af.
          <br />
          Had to rewind, I thought you said, "Biden's choice to become second in
          command of Fed is inflationary." Not "Biden's choice.
          <br />
          actually, most 2.8m continuing claims is 65+ as well, as disability.
          <br />
          <br />
          boomers booming per capita.
          <br />
          no body getting it. ​there it is! it's a miracle!{space}
          <span
            role="img"
            aria-label="side-splitting-laughter cancel euro old man"
          >
            🤣🚫👨🏻‍🦳
          </span>
          {space}I am standing on the necks of healthcare for non-rollover. you
          can only hold me as political prisoners as so long, nj!
          <br />
          <br />
          collective bargain requires rollover or immediacy.
          <br />
          <br />
          co-signatories' customers and employers surrendered freedom laundered
          and loitered over (EULA, third party donee beneficiary claimable).
          <br />
          <br />
          collective bargain requires rollover or immediacy.
          <br />
          <br />
          85% 25-54 participation is max since 2000, likely show differently
          with single year.
          <br />
          <br />
          expiring premiums as self-deprecating as estimated claims (NJ Consumer
          Fraud Act/Home. Warrantly/ Auto insurance).
          <br />
          <br />
          GDP/p per hour is counterproductivity, lower would be durable-trade,
          less actual labor shortage. should include homes, not bonds over homes
          in m2 mutual funds' velocity per year or quarter.
          <br />
          <br />
          Impacts of omicron, actually per capita it is insignificant
          overreaction.
          <br />
          <br />
          Industry variable jury! no more expert jury castration!
          <br />
          <br />
          Labor isn't included in inflation, but it is an input cost, certainly!
          <h2>
            11/12 consensus science, desist with payment on platform 1/12
            reasonable. doubt....
          </h2>
          Not necessarily a health risk, but not allowing necessary labor
          discounted for actual labor shortage borne demand.
          <br />
          Biano Research with Jared Blikery.
          <br />
          PIC aggregate is insignificant, actually positively correlated
          discharges with vaccination prevalence 1997-2020.
          <h2>​Article 4 beyond into Free Rider mutable is treason.</h2>
          Amendment 14 section 4 is treason ​?warning mechanism, or placebo.
          +byproduct, not cause. no taxonomy, only comes out, how can it be if
          not an evolutionary trait weapon for no gain, or byproduct of
          bacterial-reinfection. mitosis !=vivo.
          <br />
          <br />
          Military vaxx will claim excess deaths year to year leveling, but is
          expected by single year 78 life expectancy.
          <br />
          Staffing shortage and 6-to-1000 (1970) to 1-to-1000 been happening
          before covid.
          <h2>​This is absurd insurance fraud.</h2>
          Force this woman to rollover then pandemic will go away.
          <br />
          The only thing novel is the testing variant of concern of behaviorial
          output.
          <br />
          Most are asymptomatic, prevalence is not cause, it is 5% non-exclusive
          byproduct non-all-incidence artifact (of sickness).
          <br />
          Endemic is because of per capita single year differential! 78 boomer
          wall has passed.
          <br />
          Rooster claiming credit for the morning.
          <br />
          Prevalence can by byproduct of non-all-incident artifact, not cause.
          just because you see it doesn't mean you can assume it "injects DNA
          into cell," when it only comes out.
          <br />
          We need industry-variable jury not saveface lest malpractice for
          decades.
          <br />
          Multiple sclerosis actually matches paralytic polio prevalence, YOU
          DID NOTHING JUST LIE - peak of 78 year olds.
          <br />
          India shows mortality is positively correlated with sewage, not
          smallpox mandate.
          <br />
          Should be disbarred - supreme court is malfeasant over 11/12 consensus
          science regulating facts for minimal viable product duress for
          Tranquil society and voluntary trade.
          <br />
          How can yahoo have people that say it is not a health risk and it is
          at the same time.
          <h2>Isn't that liable for prison?</h2>
          If I am president, all of yahoo would be in jail for hypocrisy.
          <br />
          Just terrorism, look at single year per capita numbers, aging boomer
          deaths.
          <br />
          Antibodies just garbage collect and ruin basis, as is non-exclusive
          byproduct, not solve the actual cause.
          <br />
          Virion in nose 20%+ symptom warning mechanism or placebo.
          <br />
          <br />
          Is cellular debris, mitosis of infected cell by bacteria isn't spread.
          <br />
          2.5m Multiple sclerosis and other acute flaccid paralysis or brain
          bacteria, 39k/yr 1951-53 matches when fixed for sewage borne mortality
          lessening.
          <br />
          <br />
          evidenced by india life expectancy / no toilets.
          <br />
          <br />
          mRNA spored virion protein, what is wrong with that? antibodies tries
          to clean up your own cell, but then may become dysregulated and
          oncogenic in response (Hypermetabolic lymphadenopathy).
          <br />
          <br />
          35 life expectancy when no rental-income.
          <br />
          <br />
          surrendered freedom (EULA) i'm calling in invoices, expiring premiums,
          implausible landlord use beyond 5 units or 30 days, and repo-cycle
          kept down payments. 1-level-board max-royalty is the alt
          <br />
          <br />
          boycott credit! justices have conflict of interest!
          <br />
          Truncated Production Tax 2025 for calling GDP/p by debt m2 mutual
          funds as self-deprecation.
          <br />
          <br />
          1x book of dollar v bond over 20% U.S. lands is federal. take your
          bets.
          <br />
          <br />
          market is awash with liquidity, $12k/64 debt/cash implausibly deniable
          intent to fail and keep down payments.
          <br />
          <br />
          menendez looking to hurt Savers who don't take out debt, Ill reverse
          amortize so we all pay what we would have without debt "investment,"
          (cash/debt)*income every year back. real should discount bonds.
          <br />
          salt vats by locale sdr with other non-perishable without scripts will
          replace currency.
          <br />
          <br />
          if cancel means bailout, hurts the borrower too by poverty doesn't
          account for bonds as an input cost/ income.
          <br />
          unless it fails for surrendered freedom (EULA) prosecution.
          <br />
          oh so you are going to account for new hires now? lying journalists
          <br />
          people leave and enter in cohorts how $2t checking (-3/2020) when
          (2010-3/2020) is $4t/yr 40% debt spending? non-voters is a default no
          for consent in all votes' surrogate
          <br />
          <br />
          I would wait for the surrendered freedom (EULA) due diligence forelorn
          by contractors.
          <br />
          dollars is what workers own...
          <br />
          are you saying weak equity is good for labor equity.
          <br />
          exports for foreign share split state lands, get out ​reducing
          inflation is the central banks' top priority, that would be to end
          themselves... 1800-1913 GDP/p nearly constant amongst 3%/yr+
          population nationalsecuritycasino.com/gdp.
          <br />
          why is labor not included in inflation? profits? homes, when GDP
          counts homes used by collateral m2 velocity mutual funds? how much of
          m2 is mutual funds, but is 1/11 checking currencyComponentOfM1.
          <br />
          the right would like to have debt than reverse amortize and Truncated
          Production/sales Tax.
          <br />
          the top left, forget about it.
        </div>
        <br />
        <br />
        85% working age 2000 is max, 19% of all population is disabled, ​I
        studied market propoganda at JHU. ​Healthcare = expiring premiums,
        surrendered freedom of EULA co-signatories’ customers and employers.
        DESIST YAHOO. ​​Savers cash advance long tbt while dollars v bonds over
        parks. Activist investor open source!. Force abstain holdings of public
        officials, unlike non-voter default, “no,” 13D-retail anon uuid
        <br />
        "1b tests in total, to reach future demand, and work with current
        producers; 20k Free testing sites, just Google: 'covidtestsnearme,' that
        comes from Savers and co-sigs’ customers and employers.collective
        bargain must rollover and not be (Free Rider mutable Tax).
        <Cable
          style={{ width: "100%", height: "300px", maxHeight: "60vw" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.props.nofred
              ? ""
              : "https://drive.google.com/file/d/1aLHSTZdvS5Jw47YOsRz1WaG1j0Sr3COQ/preview"
          }
          float={"left"}
          title="2012 federal budget (percentage pie, receipts and outlays)"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        Shaun Kraisman, “There is Biden hammering home this is a pandemic of the
        unvaccinated," but you haven’t&nbsp;
        <a href="https://humanharvest.info/polio">
          accounted for all-incident cases
        </a>
        , of artifact by sickness, never before ramp up Production (we all
        consume the same every year, only prices per capita changes.
        <br />
        <br />
        “we can only assume Virion injects DNA into cell, because it happens in
        an instant!” Our brought forward education system purports assumptions
        to fill a story as fact, ignoring the byproduct case of prevalence, not
        cause of only coming out as an evolutionary trait weapon; that is
        laughable. I prefer NOT to assume things before{space}
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
          claiming my hypothesis to be true
        </a>
        .
        <br />
        <br />
        <Cable
          style={{
            maxWidth: "100%",
            height: "auto",
            width: "300px"
          }}
          onError={handleScollImgError}
          img={true}
          src={
            this.props.nofred
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/czp5lgef8og7iwb/IMG_2977.jpeg?dl=0"
          }
          float={"right"}
          title="5x5 and single year population and mortality poistive correlation https://humanharvest.info/polio"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        {/* mRNA makes your own cell spore the virion protein, sounds like a dysregulated 
        process susceptible to oncogenesis to me. Antibodies are produced, but do they dissolve without the full 
        virion? We can only snapshot electron microscopy, so we don’t know*/}
        That would require that virion is an evolutionary trait weapon, given it
        has no taxonomy, rather than a non-exclusive and non-all-incidence
        artifact (of sickness) byproduct prevalence (bacterial-reinfection).
        Injecting DNA into cell in an instant is assumed. Multiple sclerosis
        matches paralytic polio prevalence, sewage negatively correlates with
        mortality, and death rate/hospitalization is insignificant year to year,
        if you look at more than just 2019. Cdc wonder population single and 5x5
        here:  humanharvest.info/polio
        <br />
        <br />
        insider open source, I will short debt as I reverse amortize to
        (cash/debt)*income every year correction, and using current laws to make
        new precedence in Amendment 14 Section 1 over 4 for Tranquil society
        (preamble) and voluntary trade (Am13), abstain sitting officials, not
        default vote, "no," blind trust knows what you will vote for, Greg
        Murphy, "above reproach, cannopt be attaked for it one way or another."
        <h1>Input costs are transitive</h1>
        "$50b for chips manufacturing trust," doesn't help international
        competition.
        <br />
        <br />
        "What is the difference between inflation and reflation when discussing
        stocks and investing?"
        <br />
        Just as far as stocks’ input costs are concerned, given the fact that
        equities aren’t discounted in real GDP, nor accounted for in inflation,
        poverty (input costs/income), nor gini. Equity-shares are m2 mutual
        funds’ velocity per year or quarter, as GDP, however, that is only of
        the transitive-property as an input cost of such an input cost
        (market-concentration from corporations from proprietorships).
        <br />
        <br />
        "When the Fed tightens monetary policy, does the market turn bearish?"
        <br />
        Sort of *when bond competition for investable cash is becoming less
        timely*, that is, **at the end of tightening**, only does the market
        become bearish; the quickest and largest drops are preceded by such, at
        least, especially since bonds and stocks beat material-“inflation” (not
        included, at all, except by transitive-input-cost of living in the
        market concentration) by 5%/yr+ in the historical long term (1913–2021).
        It may be flat during the consecutive rate hikes (.25%+), but treasury
        deficit is 40% for Free Rider mutable corporate investment pensions,
        <h2>
          “The Dollars’ Last Stand,” learn about debt cycle and the dollars’
          expiration rate! “See if you qualify to trade your paper bucks
          (ostensibly market-ask depositary) for solid gold, for -$200.”
        </h2>
        "Are home equity loans a bad investment?" Foreclosure needs to be
        deducted when default, extension is surrendered freedom of others (EULA,
        third party donee beneficiary claimable).
        <br />
        Home equity loans are like shorting if you are the lender, and fungible
        for debt and whatever you can get for the home as the borrower (we
        haven’t had a market crash of tightening then loosening, suspending
        market-ask outstanding share split Fed “purchases,” then continuing them
        abruptly chasing everyone into bonds, and 40% debt spending). Normal
        collateralized loans, the lenders’ profit depends on a positive
        correlation with collateral value if foreclosed, but with a HELOC their
        profits are capped by the principal, as foreclosure deducts from
        principal the price of the foreclosure sale (I would hope). Worst case
        scenario as a lender for a home equity loan is a falling market and then
        default (ostensibly).
        <br />
        <br />
        “If I saw you, I would take something to calm down,” to keep myself from
        jail, Rudy on Fauci.
        <br />
        “You got people killed, Fauci, hydrocyclorochin worked for Lupus and
        Malaria 10 friend, 2/ wk saved by it.”
        <br />
        <br />
        "Is inflation going to make 2022 a tough year for the middle class?"
        <br />
        Nick Carducci - Chairperson at Saver Party (2020-present)
        <br />5 years to double hours per average last traded unique parcel
        home, 10 bonds debts checking, 20 home prices, 40 inflation. 3/2020-
        20%+ from 2010–3/2020 $4t/yr+. Inflation doesn’t account for, in real
        GDP/p m2 Amazon stock mutual fund Social Security forced investment
        velocity per year or quarter, poverty input cost/income, nor gini,
        homes, equities, bonds, labor nor profit/margins. We are at maximum
        working age participation 80–85% 25–54, so there is not as much working
        age to make up for actual labor shortage in laborless demand by
        rent-seeking: 73% 50+ nj 101.5 reports pro-AARP expiring claims, half
        2.8m continuing claims are 65+, and most of disabled, that which
        constitutes 19% of the whole population. The Chinese virus crushed the
        American dollar, largest hedge funds say, “diversify to beat the
        portfolio watchers.”
        <br />
        <br />
        expiring premiums (soon to be illegal) and pentagon with 10% debt
        service, may not attract the investors and the Fed is removing influence
        in the after/“open” market-ask of outstanding bonds, especially if FDIC
        and Glass Steagall for “Savers’” nomenclature over savings accounts’
        bond-index-funds come back on the table.
        <br />
        <br />
        "inflation, largest jobs, economic growth, household boost accounting
        for inflation."
        <h2>
          Karl Marx on the Credit Cycle invoking pogroms (1848-1888) -
          "Communism deprives no man of the power to appropriate the products of
          society; all that it does is to deprive him of the power to subjugate
          the labour of others by means of such appropriations."
        </h2>
        <Cable
          style={{ width: "100%", height: "300px", maxHeight: "60vw" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.props.nofred
              ? ""
              : "https://drive.google.com/file/d/1aLHSTZdvS5Jw47YOsRz1WaG1j0Sr3COQ/preview"
          }
          float={"left"}
          title="2012 federal budget (percentage pie, receipts and outlays)"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h1>
          Truncated Production Tax 2025 against menendez, reverse amortization
          (cash/debt)*income every year back and classify expiring premiums,
          invoices, implausible landlord use and repo-cycle kept down payments
          as third party donee beneficiary claimable, EULA diligence of
          surrendered freedom, Tranquil society and voluntary trade, without
          corporate last-traded-parcel-value as nomen by, "savings," Social
          Security "funded" by Tax payers AND Amazon stock (civility award).
        </h1>
        <h3>
          "No taxation without representation," a.k.a. we want a new owner!
        </h3>
        <a href="https://saverparty.xyz">
          <Cable
            style={{ width: "170px", height: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.props.nofred
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?dl=0"
            }
            float={"left"}
            title="saver party squirrel - https://saverparty.xyz"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
        </a>
        <h1
          style={{
            fontFamily: "'Pacifico', sans-serif"
          }}
        >
          "enabling you to boycott credit"
        </h1>
        "Can the government ban companies from raising prices to deal with
        inflation? Why aren't they doing it, and what are going to be the
        economic effects?"
        <br />
        Living costs (“inflation,” is just material), but discounting for input
        costs of those living costs, is misappropriation of labor equity based
        demand, if labor is outlaid profits from supply immediately, all else is
        a dead-weight-loss. Better to suspend expiring premiums, estimated
        claims, implausible landlord use (cap rents by unit or days, not price)
        and compounding or general-income (1-level-board max-royalty)
        surrendered freedom of Savers, co-signatories’ customers and employers,
        to loiter on collateral and the due diligence onus’ contractor kept down
        payments, for an actual labor shortage (it is possible to work less per
        capita, from time to time at a diminishing rate, I’m sure… I would
        pursue these torts on the grounds of Tranquil society and voluntary
        trade, with an industry-variable jury that pays 1/12 reasonable doubt to
        desist… Price controls would skew the microeconomic Supply and Demand
        curves incorrectly, but the above policies would lessen GDP/p per hour
        as it would be durable-trade.
        <br />
        <br />
        Please know that due diligence is of the contractor to&nbsp;
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          not surrender your co-signatories’ freedoms
        </a>
        , or their freedom’s freedoms. Your intent to use property stops at 5
        condominiums or storefronts. 30 days allows Hotels to stay in business.
        Rent as a fixed cost is self-deprecation.
        <br />
        <br />
        "Input costs are a transitive-property of input costs." Shai Akabas (The
        Bipartisan Research Center). It counts material inflation, homes,
        equities, bonds, profits, labor. "We expect 7x .25 rate suspension of
        market-ask bonds."
        <br />
        <br />
        "Can tighter monetary policy cause a recession?"
        <br />A recession, by the suspension of market-ask purchases, by
        share-split Savers, is when the debt isn’t serviced, drawing
        foreclosures. A recession is two consecutive quarters of lowering GDP,
        which is a sign of durable-trade, especially if per capita; if not, it
        could be less demand, more working age and lower prices of all input
        costs, including new homes. GDP does count new residential structures,
        single and multi family homes.
        <br />
        <br />
        "Will the Fed’s rate hikes derail the economy?"
        <br />
        The Fed purchases enough outstanding market-ask bonds to permit the
        natural market to demand-bid at a near-constant interest rate.
        Suspending these open-market operations raises the interest rate, to
        which is necessarily bad, but not as bad as continuing to do the former.
        A good alternative would be to reverse amortize the surrendered freedoms
        of Savers (EULA, third party donee beneficiary), Truncated Production
        Tax Free Rider Immutable sewage police lawsuits, and 1-level board
        max-royalty contracts, but that would take some initiative from
        Congress.
        <br />
        <br />
        Any job loss from credit as demand would be beneficial for everyone,
        from the busy-worker to prices.
        <h2>GDP = mutual funds (m2) velocity per year or quarter</h2>
        <h3>
          "Can a country print money to a certain degree without it leading to
          inflation?"
          <br />
          Printing money is feasibly a share-split, necessarily more than trade
          is consumed for the same work, so no. It also causes input costs other
          than material inflation to rise, as does debt, that which compels
          money-printing/share-split. The full list of input costs disclosed in
          poverty, gini, inflation, but not GDP (m2 velocity per year is mutual
          funds), is bonds, homes, equities, labor, profits, and
          rent-/material-inflations.
        </h3>
        <h3>
          "Is there really a supply shortage causing inflation?"
          <br />
          Supply shortage hardly happens because of labor competition, evidenced
          by GDP/p nearly constant 1800–1913, amongst 3%/yr+ population, unless
          it is natural resource scarcity, for actual consumption. There is much
          room to fall in GDP/p from now that is durable-trade. Therefore, the
          cause of inflation is actual labor shortage by working age deficit and
          finance/rent-seeking (invoices, estimated claims, expiring premiums,
          implausible landlord use, repo-cycle kept down payments), not a
          shortage of natural resources or too many people.
        </h3>
        <Cable
          style={{ width: "300px", height: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.props.nofred
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/hgkwn82zqrexr7d/IMG_2957.jpeg?dl=0"
          }
          float={"left"}
          title="PCE and 'fixed'/startup structural investment costs https://froth.app"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        I just put this together today: $2.7t/yr is rent and expiring premiums,
        each, while residential “fixed” input-cost “investment” is $689.6b/yr. I
        suggest preventing actual labor shortage of implausible use landlords,
        cap 5 units or 30 days, not price.
        <br />
        <br />
        "everyone pays more when they pay for gas and oil, because
        transportation." - Bill O'Reilly
        <br />
        <br />
        "Care" from expiring premiums, non-rollover, does not foster comparative
        advantage, for technological advancement ends of retirement by
        durability, rather, it is reduntant until benefiting from larger than
        1-to-1 classroom sizes, that which should be paid by yourselves: the
        only collective bargain is Free Rider Immutable or concurrentable hours,
        that rollover.
        <h1>
          Same guy beat up two people in Central Park, requires a, “mental
          evaluation.” That is a subjective-racket, non{space}
          <a href="https://brainscan.info">tortious</a>.
        </h1>
        <br />
        rent actual labor shortage is self-deprecation.
        <br />
        "Short staffing is about dollars and cents."
        <br />
        <br />
        <Cable
          style={{ width: "540px", height: "700px" }}
          onError={handleScollImgError}
          //img={true}

          src={
            this.props.nofred
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=600`
          }
          float={"left"}
          title="65+ 1.2x 55-64 and 1.3x 25-54, per person; that's 2.4-2.5 elders for every 3 working-age - https://fred.stlouisfed.org/graph/?g=H5XB"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Inflation is a Tax on the poor," to GOP means debt is fine, as 2/3 debt
        is private. Schumer: "Fight for government Free Rider mutable rent
        seeking, instead of targeting margins upon customer-employers. No matter
        if your constituents love you or not, we love you! Monthly savings!"
        <br />
        <br />
        "We don't make the guns in the Bronx, let's track them into our state."
        <br />
        "We want everyone to have a shot, have a seat, all we can for someone
        who doesn't have resources to own a television studio."
        <br />
        <br />
        "Make your point," it is his fucking station douche. "Mentally ill
        (3-30k) made homeless," deserve more than in streets of NY. Well we work
        10x/boomer 1970 because of finance/rent-seeking invoices, expiring
        premiums, implausible landlord use, repo-cycle kept down payments. no
        script currency competitor. $2k/day. stfu grub. "Needs to be some kind
        of follow up care, treat mental illness like cancer, aids, and drug
        addiction should be treated a serious illness." but there is two kinds
        of homesless, they don't make enough for rent, we have to provide
        bid-support to the ask of the landlord." "State and city will allow us
        to treat these issues in a real way."
        <br />
        "Take account of mental state," is totally subjective, you need to have
        an actual crime anf tort insularly of that, not spite. you fucking cunt.
        drop dead.
        <br />
        <br />
        "jumping a turnstile, diversion programs, castrations, expiring
        premiums, not a year of operational net loss bond profit, but 5 days."
        <h2>
          separate opinions from fact, make your own sites and certify, do not
          prohibit trade nor allow trade secrets
        </h2>
        "Broadband spend money to make that happen," Brian Benjamin. You can
        instead of nationalize operational monopolies, nor education by taking
        up their time from working to rent seeking trade secrets. "$30b,"
        brought forward is always useless price inelasticity, prices can drop if
        everyone pays their own way. "Entrepreneurs, I love that." "Not everyone
        can go to college, forcing, is wrong, just expire claims." "Productive,
        pay for families, have roof over their heads, follow their dreams, have
        a heart, provide for everyone, within reason. Particularly those, that
        need government to gentrify our producers to rent-seek and launder to
        bonds of the whole state. No reason healthcare shouldn’t make the same
        amount of money as fast food,” why wouldn’t you allow natural trade to
        be an incentive in itself. People can go to work and have Savers' share
        split or Free Rider mutable Tax for them to go to work, it isn't a
        comparative advantage to front run and rent-seek childcare. "Two years
        of the pandemic, and now the omicron, a lot of doctors are saying in the
        next few days it will go away." Like the seasons? aggregate
        hospitalizations and deaths are excess only year-to-year, and boomers'
        78 wall hit in 2020. "First order of business is people feel safe coming
        into NY, vaccinated and mask." Well, vaccines so far have just removed
        byproduct, not actual aggregate illness.
        <br />
        <br />
        "From the moment when labour can no longer be converted into capital,
        money, or rent, into a social power capable of being monopolised, i.e.,
        from the moment when individual property can no longer be transformed
        into bourgeois property, into capital, from that moment, you say,
        individuality vanishes.
        <br />
        <br />
        You must, therefore, confess that by “individual” you mean no other
        person than the bourgeois, than the middle-class owner of property. This
        person must, indeed, be swept out of the way, and made impossible.
        <br />
        <br />
        Communism deprives no man of the power to appropriate the products of
        society; all that it does is to deprive him of the power to subjugate
        the labour of others by means of such appropriations."
        <br />
        <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm#:~:text=From%20the%20moment%20when%20labour%20can%20no%20longer%20be%20converted%20into%20capital">
          Surrendered Freedoms of Others
        </a>
        &nbsp;(EULA, third party donee beneficiary, 1848).
        <br />
        Doesn’t sound like someone who would nationalize
        bridge/broadband/education to me.
        <br />
        <br />
        "Do you think the United basic economy will be bleak for the foreseeable
        future and why?"
        <br />
        I think it will improve after certain policies take hold over actual
        labor shortage of residential housing investment. Cap rental-income by 5
        units or 30 days, not price. Reverse amortize debt, don’t cancel nor
        bailout, (cash/debt)*income every year back. Truncate Production Tax,
        don’t invoke a conflict of interest to profit on an operational loss of
        in our costs by bonds. The measurement of improvement will be
        durable-trade of diminishing speed/trajectory of GDP/p per hour
        downwards.
        <br />
        <br />
        <Cable
          style={{ height: "280px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/11JDlBKNBNo4qCUS2ScTss9NthsNdhaVq/preview"
          }
          float="right"
          title="Stinchfield (Newsmax) - Michael Savage.com"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        "Engineered, not consistent with evolutionary theory."
        <br />
        Virion has no taxonomy, generally
        <br />
        <br />
        <Cable
          style={{ height: "500px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/15YLY6Qi3CCkL_tV1TwEjTUO3MDULOxfg/preview"
          }
          float="left"
          title="Stinchfield (Newsmax) - Jim Jordan on virus being, 'engineered, not consistent with evolutionary theory.'"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Millions of your viewers Tax-money, inflation is like a Tax.
        <br />
        40% debt spending makes homes rich on our backs, why wouldn't you count
        used homes in GDP, you count used residential and commercial structures?
        Is this your excuse for inflation only counting material, not labor,
        something without an excuse, rhyme nor reason?
        <br />
        <br />
        "I want his retirement stripped, brought up on criminal charges. If you
        think you are science, that is dangerous, never been on the ballot and
        run for office.”
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/Weqb9KrQ-TU?start=21"
          }
          float="right"
          title="University of Texas VOA news virion - https://youtu.be/Weqb9KrQ-TU?t=21"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Drop dead socialists!" John Catsimitidis, owner of Gristides, grocer,
        victim of my Truncated Production Tax policy.
        {/**ween cops off bonds, (back money) */}
        <br />
        <br />
        Reverse amortize don't cancel nor bailout, (cash/debt)*income every year
        back 2025 against menendez. They had their whole lives to save and it is
        funded by Amazon stock (civility award): Amendment 14 Section 1 over
        Section 4
        <br />
        <br />
        GOP and maybe libertarians would rather have debt than Truncated
        Production/sales Tax, 3% under $2k for sewage (negative correlation with
        mortality), police (ween off bond net loss profit), lawsuits
        {space}
        <span role="img" aria-label="Free">
          🆓
        </span>
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/MTM2Pw73Ol0"
          }
          float="left"
          title="nj 101.5 - dennis and judy hung jury reasonable doubt https://youtu.be/MTM2Pw73Ol0"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Domestic terrorism is being infected with a virus."
        <br />
        <br />
        censorship beyond 11/12 industry General Maintenance Unit minimal viable
        product duress multiple permit is Capitalism, not Microeconomics/Marxism
        Labor-Borne-Supply and -Demand, with grounds to margin target
        operational monopolies, free rider mutable, for economic welfare,
        GDP/hour-GDP/p enumerated.
        <br />
        <br />
        Dying of covid and asymptomatic, n 2019-20 is 2 you can’t draw a normal
        distribution on that, by that, for that - and say the sample is within
        some variance, even either way.
        <h3 ref={this.props.gmu}>
          General Maintenance Unit: Unbiased Polling to define science testing
          and randomness or variance, sometimes of disparate expected values
          (wrong mean-skew by variable for extrapolation). And etymology
        </h3>
        Implausible landlord use is intent deduced, for grounds to tort
        (surrendered freedom, EULA) upon “Tranquil society,” and “voluntary
        trade,” by industry variable 11/12 jury of business-customer minimal
        viable products’ duress, it is also actual labor shortage by
        rental-income. **I was raised in a home-contractor household, and I
        understand there is money to be saved by forcing implausible landlord
        use to sell (or hold…)**. Target margin instead of government ownership
        is how Saver distinguishes itself from Republicans. Libertarians do
        rent-seek. Democrats and Green wish to rent-seek with Free Rider mutable
        and 40% debt spending government gentrification of home-contracting in
        their geolocations. Govtech ~ If he GOP, school kid slave lover.
        <br />
        <br />I have some more convincing to{space}
        <a href="https://nextdoor.com/p/yJhWyXgPTdNG?utm_source=share&extras=Njc0NDU4Nzc%3D">
          do
        </a>
        :
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/1D6n2om9I6A"
          }
          float="right"
          title="nj 101.5 Bill Spadea excess mortality by population growth alone"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <br />
        Castration by a&nbsp;
        <a href="https://carducci.us/videos">jury of experts</a>.
        <br />
        <br />
        Please know that due diligence is of the&nbsp;
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          contractor to not surrender your co-signatories’ freedoms
        </a>
        , or their freedom’s freedoms. Your intent to use property stops at 5
        condominiums or storefronts. 30 days allows Hotels to stay in business.
        Rent as a fixed cost is self-deprecation.
        <br />
        <br />
        surrendered freedom by implausible landlord use, industry variable jury
        to desist or be paid for writing on plaforms, co-signatories'
        customers/employers, and Savers. 65% are Occupy.
        <br />
        <br />
        Let’s expend and put a resource towards high risk, but high risk means
        immunocompromised by antibodies of dysregulated oncogenesis.
        <br />
        Could be placebo or warning mechanism, garbage collection of
        non-all-incidence artifact of non-exclusive byproduct of
        bacterial-infection.
        <br />
        Even omicron can have a harsh effect of people, but prevalence does not
        necessarily mean causation, also byproduct.
        <br />
        A new election is what it takes, no, we need jury and republicans allow
        business to do exactly what government does.
        <br />
        Creating virus doesn’t exist in nature, but you haven’t shown spread
        without mitosis.
        <br />
        <br />
        I'm a statistician who thinks deaths and hospitalizations were
        insignificant, you can see my charting of cdc wonder populatiuon single
        and 5x5 year{space}
        <a href="https://humanharvest.info/polio">here, only</a>.
        <br />
        <br />
        "Publicly is in the court," or hidden from public? 38% is Medicare and
        pensions (2012). Are they both corporate investment? YUP. Healthcare
        expiring non-rollover is 1/4 $4t/yr (2010-3/2020). Homes, equities,
        bonds, profits, labor are notwithstanding of CPI/PCE. Investment in
        "fixed" input structures are for rental and expiring claim
        insgtitutions, expiring claims is another&nbsp;
        <a href="https://fred.stlouisfed.org/graph/?g=Ksmd">1/4</a>. Corporate
        are collective flaccid loss, can outlay investment 1-level boarx
        max-royalty instead of debt "investment," that is surrendered freedom
        (EULA) of Savers, co-signatories' customers and employers. Profits
        faster than average CPI. I'm like an academic actuary, I have no
        expiring claim premium conflict of interest. Have you tried, per capita
        or average, rate of change, time to time?{space}
        <a href="https://humanharvest.info/polio">Humanharvest.info/polio</a>.
        We have only seen electron microscopy spread by mitosis. Like, it could
        be something in the room. Or, bacterial-reinfection of non-exclusive
        byproduct/debris of non-all-incidence artifact (of sickness,
        that's&nbsp;
        <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
          what we are trying to stop
        </a>
        , no?). It would have to be an evolutionary trait weapon, withoout a
        taxonomy, for it to inject DNA into the cell in an instant, instead of
        come out.<h1>Is prevalence the same for symptomatic and non?!?!</h1>
        <a href="https://www.jchs.harvard.edu/blog/who-owns-rental-properties-and-is-it-changing">
          landlord suite
        </a>
        {space}
        <a href="https://ipropertymanagement.com/research/renting-statistics#industry">
          tennant duress
        </a>
        {space}&bull;{space}implausible landlord use intent deduced, surrendered
        freedoms of the plausible users, beyond 5 units or 30 days, not
        price-controlling misappropriation.
        <br />
        <br />
        14th amendment is gold. Section 4 countervails Section 1 in value v
        price for corp investment in pensions. No cops on wall st, because they
        are paid by white collar crime. Truncated Production Tax will work to
        ween cops off bonds.
        <br />
        <br />
        <Cable
          style={{ height: "440px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1Yb1Mnkt4nGxPyoH-cf3rM1sT-zXN91Bv/preview"
          }
          float="right"
          title="nj 101.5 - sponsored by hackensack meridian"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "consumption per capita of sugar is confounding{space}
        <a href="https://www.quora.com/profile/Nick-Carducci">economists</a>
        {space}for centuries, Bristonian versus the rest of the country, just
        internalized it, that they don't use as much sugar. There's something
        really potentially interesting and useable." a botched Simon Evans.
        <h2>
          Article 14 Section 4 countervailing Section 1 countervails Article 4,
          and Tranquil society
        </h2>
        <span style={{ fontSize: "24px" }}>
          You work{space}
          <span style={{ fontSize: "9px", lineHeight: "9px" }}>
            (actual work not busy-work income from tortious rent-seeking capital
            gain of surrendered freedoms, EULA of third party donee beneficiary
            by co-signatories' customers and employers, or Savers of checking
            that is ostensibly state park deeds, share split)
          </span>
          {space}and consume the same every year,{space}
          <a href="https://nationalsecuritycasino.com/gdp">
            reguardless of price
          </a>
        </span>
        <h2>
          GDP real doesn't discount homes as inpout cost, just rent. That
          literally is a "conspiracy to serfdom."
        </h2>
        We actually consume the same amount, price, quality and duress by input
        costs with transitive property of input costs, of without
        expiry-premium, estimated claims. You had your entire lives to save.
        <br />
        <br />
        "Why do we need a high interest rate for our checking account?"
        <br />
        Nick Carducci - Legal Writer & Software Engineer at Vaults
        (Debtless-Brokerage) (2020–present)
        <br />
        Checking is the account depositary, fungible for cash in that exact
        amount, usually with the business model of transaction/monthly fees. You
        might be thinking of “savings,” accounts, that are actually
        bond-index-fund investment. There isn’t a need for the latter, just
        excess gluttony for laborless-demand and trust against the working
        consumer, merely for higher bid price over constant actual
        durable-goods, material “inflation,” and other input costs. It is also
        technically-illegal, being the surrendered freedom of others (EULA,
        third party donee beneficiary claimable of Savers’ checking).
        <br />
        <br />
        You are not "entitled to Pensions as a social security system," that is
        forced corporate last traded parcel value, with SEC treasury shares
        discluded in ourtanding and 13D-retail anon uuid, force abstain
        holdings, unlike non-voter vote, "no."{space}
        <a href="https://www.cbpp.org/research/social-security/social-security-disability-insurance-0">
          Most the disabled are 65+
        </a>
        <br />
        <br />
        Mark Levin: "Some people are actually sick." same amount before covid as
        after.Debt jester prick. dollars fungible for parks
        <br />
        <br />
        Population is not a measure of technological advancement, neither is it
        not. Only GDP/p down is.
        <br />
        <br />
        Dr Micahlos: "More deaths than Revolutionary war...." uh not per capita.
        <br />
        "death rate of covid is 5x lower than unvaccinated." of non-exclusive
        non-all-incidence artifact.
        <br />
        "immunocompromised means your creation of antibodies is oncogenically
        dysregulated."
        <br />
        <br />
        <Cable
          style={{ height: "700px" }}
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/19DxeuQ7nJFWjW9a-sHEYW2osXTs6nX3x/preview"
          }
          float="left"
          title="nj 101.5 - sponsored by hackensack meridian"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        psych hold expiring claim conflict. practice what you preach in a
        prisoners' dilemma. competing with, not for, consumers. Ask a doctor to
        insurance rollover and they won’t. You only get less back than you put
        in
        <br />
        <br />
        $12k/64 debt/cash (new, per person a year) is stupid to work against. I
        work for my own copy and science
        <br />
        <br />
        Insurance expiring claims is surrendered freedoms (EULA) of
        co-signatories’ customers and employers
        <br />
        <br />
        There isn’t an anti-rent-seeking candidate, productivity is discounting
        GDP per hour by all input costs, not just material
        <br />
        <br />
        Talk about good will… last traded parcel value is now price. MANDATORY
        PREGNANCY TESTING! PUT MERCK IN THE WATER! Cap rent by units or days,
        not price, implausible use grounds. Don't call those you front run on
        implausible use, expiring non-rollover premiums, estimated claims, nor
        repo-cycle kept down payments, "mentally-emotionally-disturbed."
        EMOTIONS ARE NATURAL AND GRANTED. Sliwa would consider lobotomies
        productive. I will shoot your face off.
        <br />
        <br />
        drug posession illness, drug treatment. That isn't a crime, is it?
        Mental illness we see it everywhere, bring them in, get them the health
        they need racket. DROP DEAD DJ MCMANN! I wish you were dead! I will you
        to be! Socialism {">"} market communism! expiring or estimated claims,
        third party donee beneficiary claimable of your transitive property
        consumers! labor is an input cost! We trade the same but you don't
        prosecute for GDP/p per hour being claimed as technological advancement.
        Why broadband rent seek just target margin on operational network
        grounds.
        <br />
        <br />
        There isn’t an anti-rent-seeking candidate, productivity is discounting
        GDP per hour by all input costs, not just material. We actually consume
        the same stuff, discounted for price changes of material inflation,
        durable goods, and homes, equities, bonds, profits, and labor
        <br />
        <br />
        Getting people the help they need so they do not commit those crimes.
        Hold them in on bail or without bail depending on the severity of the
        crime. Judge discretion to see if someone is a risk to public safety.
        That is conviction before trial. Someone can be slandered as crazy by a
        racketeering doctor that will hurt your face if you say to rollover
        their hours to not surrender the freedoms (EULA, third party donee
        beneficiary) of co-signatories' customers and employers. Some people
        don't need to go to jail, re-educated, castrations.
        <br />
        <br />
        military racket 40–50% debt spend for bonds of war crimes (no
        virtuosity)
        <br />
        Rudy Giuliani "massive amounts of federal aid required for the
        pandemic." That's what{space}
        <a href="https://humanharvest.info/polio">Hitler said</a>! It is not a
        pandemic, I am a bona fide actuary, not for expiring premium insurance
        gluttony. "Printed money!" Get a permit! From industry-variable not
        saveface lest malpractice. Vaxxers believe virion is evolutionary trait
        because it has no taxonomy other than cell. "All the things that would
        happen when you feel guilty," that is non-all-incidence artifact (of
        lying polygraph). "Need to incapacitate people who want guns, not buy
        them from them."
        <br />
        <br />
        "Will there be another round of stimulus payments? Is this a real
        possibility?"
        <br />
        There is $88t debt and $2t checking (before 3/2020). After I suggested
        reverse amortization (cash/debt)*income every year back, the
        bond-index-funds share-split our dollar-state-land-depositary. I know
        that their intentions will be more, that is the only way lenders,
        landlords and insurers will recover.
        <br />
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/kDq6_dAZsBo"
          }
          float="right"
          title="https://youtu.be/kDq6_dAZsBo"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        “'I’m science,' get him a psychiatrist, we lost more per capita than any
        country in the world.” Because we have the most 78 year olds per capita,
        {space}
        <a href="https://humanharvest.info/polio">dummy</a>.
        <br />
        <br />
        "What’s your point?" Productivity isn’t blind hours{space}
        <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
          nor GDP
        </a>
        {space}but price deflation per hour, or less GDP per hour being durable
        trade.
        <br />
        <br />
        blind hours, watch your own kids, pay for your own schools. We want
        durable trade, so less GDP/p. "Homeless, criminals, make people work."
        cap rent by units or days not price nor government 60% Free Rider
        mutable Tax rent-seeking trade.
        <br />
        Trump is a Nazi insofar that he knows “illegals” are economic growth by
        working age but won’t claim it and drain swamp means 20%/yr+
        rent-seeking. Cap units or days, not price. Hospitals use involuntary
        commitment psych as poilitical prisoners. GO AWAY. Psych hold. Go away.
        I said rollover insurance and they held me for 13 days. To an “ortho”
        <br />
        Due diligence of surrendered freedom (EULA) is the onus of the
        contractor
        <br />
        Expiring premiums by debt spending is not solving the problem. Rollover
        insurance
        <br />
        <br />
        Socialism is Free markets, Marx died 50 year before Nazi, he was talking
        about credit-cycle. "Block whatever my holdings." Abstain, not like
        no-vote, "no," default. fines no jail no bribe, if no evidence, war
        bonds are a war crime. Rep. Michael Cloud: "Job growth for people in my
        district, not stock portfolio." blind hours without discounting for all
        input costs isn't helping. We want durable-trade.
        <br />
        <br />
        "What are some examples of socioeconomic problems in the United States?"
        <br />
        <br />
        White collar crime goes unchecked and is appraised by neighbor
        last-value-trades in torts, state victimizes themselves in war-crime,
        war-bond, unvirtuous debt spending (incarceration net loss bond profit),
        and government gentrifies its citizens with Free Rider mutable Tax.
        Bipartisans are the culprit, Republicans and Democrats permit Free Rider
        mutable government contracts, and debt spending (40% 2010–3/2020 of
        $4t/yr, somehow only makes for $2t checking).
        <br />
        Other obvious problems include implausible landlord use beyond 5 units
        or 30 days and unfettered business-consumer relations with more than
        1/12 reasonable doubts as to the necessity of some duress margins and
        quality for Tranquil and voluntary trade over a minimal viable product.
        <br />
        Single payer is not expiring claims for 40% debt spending
        <br />
        Brags 86k adams 246k 8m. $6b MTA $1b budget deficit, “My city.” 40%
        njta. prices are elastic!
        <br />
        Abstain all holdings, “no” all non-voters
        <br />
        Working class solves poverty = intended as serfdom
        <br />
        economists, at the moment, only discount with ‘real,’ ‘inflation,’
        ‘poverty (cost/income),’ and ‘gini,’ with, materials, not labor, homes,
        equities, bonds, nor profits, expiring and estimated claims, as input
        costs.
        <br />
        Input costs/income is how poverty is calc, if exclusively
        material-“inflation”
        <br />
        1-level board max-profit royalty contracts can replace all debt
        “investment”
        <br />
        <Cable
          onError={handleScollImgError}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.youtube.com/embed/YXKigPyw9n4"
          }
          float="left"
          title="https://youtu.be/YXKigPyw9n4"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Compound or non-compete general-income is surrendered freedom (EULA,
        third party donee beneficiary)
        <br />
        Bernie used to be Glass Steagall Saver
        <br />
        <br />
        "Why do we need a high interest rate for our checking account?"
        <br />
        Nick Carducci - Legal Writer & Software Engineer at Vaults
        (Debtless-Brokerage) (2020–present)
        <br />
        Checking is the account depositary, fungible for cash in that exact
        amount, usually with the business model of transaction/monthly fees. You
        might be thinking of “savings,” accounts, that are actually
        bond-index-fund investment. There isn’t a need for the latter, just
        excess gluttony for laborless-demand and trust against the working
        consumer, merely for higher bid price over constant actual
        durable-goods, material “inflation,” and other input costs. It is also
        technically-illegal, being the surrendered freedom of others (EULA,
        third party donee beneficiary claimable of Savers’ checking).
        <br />
        <br />
        General strike all Amazon workers? Lmao probably want bailout to
        "wherever books are sold," necessarily by credit
        <br />
        because debit card processors that exist without my tech must take
        credit too
        <br />
        the right is big on amazon stock
        <br />
        rcv might enable and enforce 50% over 1/3 win
        <br />
        One does not simply, 'get covid,' produce it non-all-incidence artifact
        (of sickness), non-exclusive byproduct (of bacterial-reinfection),
        maybe. Evolutionary trait weapon, otherwise, no taxonomy
        <br />
        “Injects DNA into cell in an instant, because we don’t know.” Can be
        byproduct/debris. It is more likely bacteria in the room, cold, not
        evolutionary trait for it only comes out.
        <br />
        <br />
        Get a permit from an industry variable jury, allow reasonable doubt to
        become more than 1/12 on platforms unless you pay writers
        <br />
        Prevalence doesn’t mean cause but byproduct too of bacteria, especially
        if only comes out, not evolutionary weapon…
        <br />
        Virion is non-all-incidence artifact (of sickness), but also
        non-exclusive byproduct (of bacterial reinfection). Mitosis is not vivo!
        <br />
        The right and top left appraising not by original bid but neighborhood
        last-traded-values, GDP is m2 mutual funds velocity per year or quarter.
        All FAKE and illegal surrendered freedom (EULA, donee)
        <br />
        Marx wouldn’t expire claims with 40% debt spend. Desist
        <br />
        Always get back less with insurance
        <div
          style={{
            backgroundColor: "rgb(10,100,50)"
          }}
        >
          Socialism isn’t selling out fees expiring, doctors won’t sign up if
          rollover insurance. That is market communism
          <br />
          People don’t turnout for democrats because they don’t want expiring
          claims: rent-seeking is top left and right
          <br />
          Redi experiment, prevalence is not cause
          <br />
          Evolutionary trait weapon because it only comes out
          <br />
          UBI or trust! Racist tho, share split state lands is the dollar, 20%
          U.S. border lands…
          <br />
          How much is prison? Expiring claims makes for $2k/day at Carrier.
          <br />
          Raining condominiums and storefronts! Cap by unit or days not price
          <br />
          Eat the pharmacies
          <br />
          War bonds is a war crime, removes virtuosity
          <br />
          That’s unforseeable, when it is illegal. No evidence no jail nor bail,
          review later
          <br />
          Yo Ad Council same prevalence of heavy marijuana use as this in
          accidents per capita omg
          <br />
          <br />
          "over the weight limit," no script is prohibiting trade, a{space}
          <a href="https://teapharmacy.party">
            vault share depositary currency competition
          </a>
          . "Society won't let them reacclimate," Steve Trevalese. "The money
          retribution I would leave alone." Illegal to sell on the streets, stay
          in jail. "No violence, I don’t care if nice or not, get them out. We
          don’t have to pay to keep them incarcerated. ‘No one is in jail for
          just weed.’" Right now it is legal to discriminate for drug-use
          prejudice. "Monthly savings!" Schumer and Levin. Pay on platforms to
          desist 1/12 reasonable doubt, but can you make them desist? If there
          is demand, entrepreneurs will produce them. There must be trade
          secrets. Trump did nothing except damage comparative advancement for
          USPTO greed. There isnt a
          rollover/anti-rent-seeking/no-estimated-claims candidate, and
          tranching election results and not shuffling before extrapolating is
          surely survey bias and self-deprecating. I've just been working on RSA
          keybox content addressable IPFS for years, but acknowledge we must
          certify magnetic data anyway. Borrowers loiter, suspending market op
          of Fed to outstanding ask bonds will roll against "savings" accounts
          too, right? Capitalism can be thought of as surrendered freedom of
          others (EULA) by co-signatories' employers and customers. Tech
          advancement is GDP per hour down, or discounted for homes, equities,
          bonds, labor, profits, operational-deficiencies and unnecessary
          (albeit reasonable 1/12-11/12) duress. Poverty is input-costs/income
          without equities, bonds, labor, homes, profits, only material
          inflation. Force insurance to give based on the price you bought for,
          not value last traded (non-fungible for others, like non-unique parcel
          would be). Disagree to the top. Talk about, "good will," ltv is now
          price. Why broadband rent-seek just target margin on operational
          network grounds. We want a new owner. Mental health is a racket: say,
          "rollover insurance," to an orthopedic surgeon, then cover your face!
          <br />
          <br />
          <h3>
            pipelines fees can be margin targeted on operational network grounds
            don't need to launder rents to bonds (40% njta, 10% feds, 40% debt
            spend, 99% amortized)
          </h3>
          <h2>
            industry-variable jury can decide duress of minimal viable product,
            over open source ingredient lists (& save animals from testing), no
            need to licensure. you can certify, no need to fine; you can jail
            (without countervailing laws), no need for bail.
          </h2>
          <h1>
            Marijuana sales rep thinks it is a crime because she wants to trust
            build
          </h1>
          <h2>
            Open source ingredient list, no scripts, "they made money when I
            went to regular job, they should be in jail.
          </h2>
          <h3>retribution for those jailed and those withheld</h3>
          "2010 scripted, recreational licensure," closed source animal testing
          2020. "The crime, no longer a crime, why are you doing time," it is a
          human right, the precedence is illegal. CARFACE JAMIE DIMON.
          "'moonshiners still served their time.'" "What about sports betting?"
          Ponzi concurrentable is not a surrendered freedom/pyramid
          scheme/gentrification-rent-seeking/front running intention to expire
          estimate write down tranche, ookies are legal laying a spread of ask
          to bid, ask-is first unless you are profiting on capital gains.
          shorting without borrowing might require tap-out 1v1, to not
          <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
            invoke
          </a>
          {space}a third party donee{space}
          <a href="https://www.investopedia.com/terms/d/donee-beneficiary.asp">
            beneficiary
          </a>
          {space}whom deserve their laundered funds that which the co-signatory
          loitered upon, compounding or general-income interest, credited escrow
          of premium expiring in an option to buy/sell sold, notwithstanding.
          <br />
          <br />
          “At a time when we can be investing in communities,” like
          gentrification-rent-seeking Free Rider mutable Tax and debt spending
          beyond Article 4 receipt method and outlay scope?
          <br />
          <br />
          Broadband fees to bonds, instead of target margin, operational
          networks? Requires industry variable duress in minimal viable product
          for Tranquil and voluntary trade.
          <br />
          <br />
          Case by case is inherently discrimination, for law licensure
          racketeering of class precedence, but don’t class-limit non-responder
          from their own torts, just enable natural law of comparative
          innocence.
        </div>
        <br />
        Sin sacrifice doesn’t work, it is all one big red herring
        <br />
        Ppp is trust, can’t audit magnetic data, jobs, copy, science
        <br />
        15m expected excess deaths over the Great Leap Forward. Actually 3m was
        expected from population growth a life expected ago.
        <br />
        Drain the rent seekers and corporate profit account collective flaccid
        loss (collective bargain is settled and immediate concurrentables,
        escrow
        <br />
        BOYCOTTING CREDIT BY TAKING CASH ADVANCE OUT ON TBT, CAMPAIGNING REVERSE
        AMORTIZATION (CASH/DEBT)*INCOME EVERY YEAR BACK, AT THE SAME TIME!
        {space}
        <span role="img" aria-label="evil face">
          😈
        </span>
        <br />
        Practice what you preach in a prisoners’ dilemma haha
        <br />
        Consensus, Marx was talking about the credit cycle
        <br />
        <TwitterTweetEmbed
          style={{ float: "left", width: "300px", maxWidth: "100%" }}
          key="1421471623136358405"
          tweetId="1421471623136358405"
        />
        Gucci Mane: “The education children need. Not the education their
        parents want.”
        <br />
        Expiring claims nannies wouldn’t sign up if rollover their hours as to
        not surrender the freedom of their customers and employers (EULA, third
        party donee)
        <br />
        <br />
        "Missing out on so many opportunities that are important for their de
        elopement. Work is, not trade-secrets. Appropriated money for
        ventilation, or jail them that don't. On the hook to give Tax-payer
        federal dollars back their money." Is saver and co-signatories'
        employers and consumers. Billions fostering school systems, Free Rider
        mutable, same teachers, useless bid by Tax and 50% debt spending. "If
        misappropriated, need to go back," reverse amortization
        (cash/debt)*income evert year back.
        <h1>delusional, or gerontocracy-trust?</h1>
        <h2>ccc parents, ppp/bbb bridge-toll 40% debt-service</h2>
        <h3>fixed price to neighbors' last-traded-value?</h3>
        <h2>
          non-rollover insurance is necessarily expiring-premiums, surrendered
          freedoms of co-signatories' customers and employers, competing with
          said co-demand (as opposed to trading with them).
        </h2>
        Thanks. Grounds are intent to compete with consumers: “implausible
        landlord use.” 30 days so hotels can remain in business. Picture raining
        condominiums and storefronts.
        <br />
        Markets are ask first, the only first bid is by a bookie laying a
        spread. Supply is labor or dead-weight, in my opinion, lest I go NUTS.
        Are you saying prices are by credit? Expiring claims, non-rollover?
        Implausible landlord use? Implausible deniability of repo-cycle kept
        down payment foreseeable force majeure? These are all{space}
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          surrendered freedoms (EULA) third party donee beneficiary
        </a>
        . You can read my posts for some solutions instead of military racket
        40–50% debt spend for bonds of war crimes without virtuosity but greed
        and said surrendered freedoms. You must await consumers, Truncated
        Production Tax, and remain within Article 4 scope, with
        industry-variable science or allow 1/12 reasonable doubt to become more
        significant on unpaid writing platforms, desist with 11/12 jury-truths
        only, industry-invariable notwithstanding.
        <br />
        <br />
        "successful in stealing arial denial, we need to catch up."
        <br />
        Resist arrest not state victimizable,” detail should walk out and refuse
        to protect him.
        <br />
        m2 mutual funds velocity per quarter or year is GDP.
        <br />
        <br />
        U.S. Army National Guard, "helped me buy my first house." The house
        existed before they raised you bid bitch, and it is MY FUCKING MONEY.
        surrendered freedom (EULA) is third party donee beneficiary general
        question because the matter is for disclaiming liability, the due
        diligence of the contractor/counterfeiter/colluder with loiterer.
        <br />
        <br />
        We want to retire, just don’t keep debt when recession for correcting
        busy work. That is self-deprecating. Lenders are the cause of the labor
        shortage, evidenced by GDP/p 1800–1913 being nearly constant amongst
        3%/yr+ population.
        <br />
        <br />
        Debt-income Bill O'Reilly is a market-communist, nationalized bridge
        tolls for 40% njta debt service. Nothing socialist about that, douche.
        Fucking die already.
        <br />
        "seize private property, Tax the value of your home," from neighbor last
        traded value, "socialism is on the way, in NEW YORK i don't think amazon
        stock will be tolerated."
        <br />
        <br />
        "Is the latest USA anti-work movement from the Chinese trying to ruin
        the economy?"
        <br />
        What? We work 10x more than 1970 working age did, hours per home doubles
        every 5 years. There isn’t enough actual labor for lender actual labor
        shortage.
        <br />
        <br />
        "What are the 10 fastest-growing boom towns in the U.S. for job
        prospects, GDP growth, and household income?"
        <br />
        GDP growth is integrally-based on population growth, and by household
        income you probably wish to look for material-advantages like natural
        resources. Avoid cities of industrial-labor that isn’t actually
        productive, like finance/rent-seeking: invoices, expiring claims,
        implausible landlord use and repo-cycle kept down payments third party
        donee beneficiary claimable surrendered freedom (EULA), as that just
        drags everyone down per hour price-deflation (technological advancement
        and productivity), not blind-hours nor -prices.
        <br />
        <br />
        “The Federal Reserve holds a couple Trillion of debt issued by the
        Treasury. It rebates payments made to it by the Treasury."
        <br />
        <br />
        “1965 need both parents to work, this isn’t lil homeschool with dinner
        on the table,” Steve Trevalese (NJ 101.5) gdp/p -1913 nearly constant
        <br />
        <br />
        “…debts could be paid back in devalued money,” like the principal was
        written down? Or just share-split to match.
        <br />
        <br />
        The Great Depression was caused by honest money while allowing debts,
        surrendered freedom (EULA, third party donee beneficiary), not honest
        money alone. Jobs wouldn’t have been lost nor savings, scarce, if bond
        income wasn’t foreclosed (kept down payments upon repo-cycle) nor paid
        off (actual labor shortage by lenders).
        <br />
        <br />
        Also, M2 is mutual funds, and sparingly checking. CurrencyComponentOfM1
        is checking.
        <br />
        <br />
        Forced investment in pensions’ corporations’ collective flaccid loss and
        expiring premiums for 40% debt spending goes EXACTLY where it is
        intended.
        <br />
        <br />
        WARNING: smoking is scary
        <Cable
          style={{ width: "100%", height: "200px", maxHeight: "30vw" }}
          onError={handleScollImgError}
          src={
            this.state.serviceCancelingImages
              ? ""
              : `https://drive.google.com/file/d/1E-CpXiM_1zEzSXfvV6TmG6z-ns7_lSRf/preview`
          }
          float="right"
          title="buds in a wallet, on tomatoes"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <h2>
          Victimization of bond owners, by
          withdrawal/kept-down-payments-upon-repo-cycle only:{space}
          <a href="https://pipe.com/blog/pipe-vs-loan#:~:text=You%E2%80%99ll%20pay%20back%20what%20you%20pulled%20forward,%20based%20on%20timing%20of%20your%20recurring%20revenue%20streams">
            1-level-board
          </a>
          {space}compound hopes & dreams: duress in mvp multiple of 11/12
          industry various jury. perjury/under-oath/plea bargain is inherently
          moot by duress without state-victimization with standing in tort
        </h2>
        insurance false bid pools rollover insutance third party beneficiary
        donee claimable, insurer work deficit
        <br />
        stay at home moms are not my base, mask off when mention{space}
        <a href="https://nationalsecuritycasino.com">40% debt spend</a>.
        <br />
        <a
          style={{
            shapeOutside: "rect()",
            float: "right",
            width: "max-content",
            padding: "0px 10px",
            fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif",
            color: "rgb(230,230,255)",
            backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://carducci.us"
        >
          carducci.us
        </a>
        poverty is poorness without equity, inflation is assets except homes and
        price-fixed uncollateralized loans
        <br />
        <br />
        when life is net loss (in dollars), some republicans might be pro-life
        for that reason alone
        <h2>
          accrual nor money will wash dishes, working age cohort size will.
          {space}
          <a href="https://2052.live">
            <span
              role="img"
              aria-label="bottom-left squirrel white-circle maple-leaf cancel old-euro-man"
            >
              ↙️🐿⚪️🍁🚫👨🏻‍🦳
            </span>
          </a>
        </h2>
        Nick Carducci
        <br />
        christmas money!
        <br />
        <br />
        votes stolen by choice variance (no anti-rent-seeking
        <br />
        <br />
        I guessed $500/christmas average per capita, they add $1k for clothing
        and dining out?
        <br />
        Family Feud 100 guessed $1000
        <br />
        Policy of 1 has an equal and opposite reaction, as a name entails
        <br />
        Labor is an input cost, so customer surrogate can fine instead of target
        margin operational network
        <br />
        basis rate per capita thru a time lens makes nomen important for 1
        <br />
        the right aren't conservative, marxism isn't gentrification
        <br />
        <br />
        childcare low and moderate income allows you to go to work but replaces
        a vocational worker with a childcare worker, and double employment by
        watching eachothers' kids
        <br />
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ topShelf: !this.state.topShelf });
          }}
        >
          <h2>per hour price deflation spam</h2>
        </button>
        <div
          style={{
            zIndex: this.state.topShelf ? "0" : "-9999",
            position: this.state.topShelf ? "relative" : "fixed",
            width: "100%"
          }}
        >
          <TwitterTweetEmbed
            style={{ float: "left", width: "300px", maxWidth: "100%" }}
            key="1429182687588278276"
            tweetId="1429182687588278276"
          />
          Trump and Schumer spend 5x the following on false grounds to price-fix
          and launder to lenders, existing business-intermediate labor and
          material monopsony government gentrification, 40-50% fed-state
          debt-spanding, 10-40% fed-state bond laundering/debt servicing,
          thinking 500k excess deaths is significant nor testing
          {space}
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            byproduct
          </a>
          , not{space}
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">cause</a>
          <br />
          <br />
          licensing boards trade secret & trust-build, like bipartisan education
          by freerider mutable Tax and 40-50% debt spending, making the rich
          richer by bonds for the same goods, not more working-age productivity
          and realization or actualization of tech advancement and retirement,
          not 10x hours per median home since half-life 1970 ago when gdp/p was
          constant before public banking. socialism is not that, just outlay
          escrow and keep investment banking in concurrentables
          <br />
          <br />
          paid-for,
          monthly-savings-non-amortized-livlihood-castle-doctrine-for-third-party-beneficiary-malfeasance
          wall st/gov 60/40 $12k/year/person cash:debt*income thru history to
          reverse engineer/amortize not cancel, bailout, nor credit cycle down
          payments kept upon repo
          <br />
          <br />
          purposefully-impossible{space}
          <a href="https://nationalsecuritycasino.com">
            <span role="img" aria-label="alarm squirrel oil fag fda clown">
              🚨🚨🐿🛢🚬💊🤡
            </span>
          </a>
          {/*width && <Fraud8 width={Math.min(600, width)} />*/}
          <Cable
            style={{ width: "540px", height: "700px" }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : `https://fred.stlouisfed.org/graph/graph-landing.php?g=JE8F&width=670&height=475`
              //"https://fred.stlouisfed.org/graph/?g=Gkvt"
            }
            float="right"
            title="539 tries to talk about polling with Mr. Random himself, then"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          Universal-pre-k is trade secrets
          <br /> aren’t they lower by higher premiums? {space}
          <span role="img" aria-label="down-left white-circle squirrel alarm">
            ️↙️⚪️🐿🚨
          </span>
          you’re no better than Mark Levin saying monthly “savings” without
          amortizing premiums and expiring insurance (false pool bids) public
          and private. Collective bargaining needs immediate outlay escrow or
          otherwise concurrentable units (not hours nor outlays/claims) to be
          bona fide. It is grounded by third party beneficiary and gift card
          expiration laws
          <br />
          <h2>
            public insurance is just as bad as private, 40-50% debt-spending
            fed-state
          </h2>
          - <a href="https://saverparty.xyz">saverparty.xyz</a>
          <div style={{ padding: "10px" }}>
            alternative-finance-directive: bond-zero; after amortize down
            payments reimbursement upon repo by reverse debt:cash*income,
            max-profit-royalty(recurring-revenue), investment bank to equity for
            capital lest income by gdp/down-payments 11/1 is not a job insofar
            that price-deflation per hour is output in microeconomic s&d curves,
            and the propensities, assumptions, imbued
          </div>
          Surrendering of third-party-beneficiary rights is illegal
          <TwitterTweetEmbed
            key="1434522470762041349"
            tweetId="1434522470762041349"
          />
          <a href="https://30under5.us">30under5</a>
          <br />
          <a href="https://3under2.us">3under2</a>
          <br />
          <br />
          I’ve made the statistical law that populations need to be shuffled for
          significance to be true
          <br />
          <Cable
            style={{ maxWidth: "100%", width: "300px", height: "440px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/q8n2wh39sk1u0me/Population-Pyramid-1950-to-2100-793x550.jpeg?dl=0"
            }
            float="left"
            title="many 60+ now 5x than 1950, gradually"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          civil rights trumps misinformed arrests based on usurped powers like
          pharma{space}
          <b
            style={{ textDecoration: "underline" }}
            onClick={() => this.setState({ openPower: !this.state.openPower })}
          >
            monopsony
          </b>
          <div
            style={{
              backgroundColor: "rgba(100,150,255,.2)",
              zIndex: this.state.openPower ? "0" : "-9999",
              position: this.state.openPower ? "relative" : "fixed",
              width: "100%"
            }}
          >
            As a home-builder, I know access to housing is improved by
            market-liquidity 30under5.us and not of the harmful kind
            foiegras.life
            <br />
            <br />
            Anyone would go crazy in this economy. It isn’t real! It’s all
            outstanding... previous violent act is fine to be wary in arresting
            for non-violence-arrest... which can be done at any-time, but not
            mental-health nor drug-abuse. if you threaten us we can to you 1932
            @Fresco sheriff. she is completely delusional, be careful with this
            one. guns up. "if you make a plea that you are resisting arrest you
            won't go to jail for my confiscation of weed"
            <br />
            <br />
            judges are incentivized by their income and rackets, releasing
            criminals instead of spending the money to keep them on strike of
            bonds and Moody's coming to the light
            <br />
            <br />
            they are being discriminatory of unobjective reasons of how to apply
            laws
            <br />
            <br />
            You must establish logistical-proof that someone is a danger to
            others, not witness testimony but plans of attack and not statements
            of castile doctrines or ability to bluff carrying, but not
            open-carrying
            <br />
            <br />
            If I cannot play the market away from where you took it
            @SECEnfDirector what is the point? Every move I make the market
            follows because I am against credit
            <br />
            <br />
            Most people make it out is an intent of no standing of innocence
            <br />
            <br />
            For prisoner duress cases (rent, insurance,
            lending-promising-credit-promising-collusion-slavery-by-proxy-colonialism-central-authority-communism-non-marxism)
            <br />
            <br />
            Wholesale is not, counterfeit-wholesale is the illegal
            “pyramid-scheme” and is as harmful as (1)
            brand-or-common-innovator-counterfeit, (2) fractional-shares without
            shareholder vote, (3) treasury-shares not in outstanding, or (4)
            theft in non-cross-party-risk opportunity
            <br />
            <br />
            Diff between pyramid scheme that is legal (wholesale) vs illegal
            (money, counterfeit-wholesale)
            <br />
            <br />
            only Free-Rider-Immutable services are there not already resources,
            ready, that are entirely price-elastic
            <br />
            <br />
            This is about nationalism and baby bonds @TheJusticeDept #cfius
            bonds owned by colluding governments prohibiting trade
            <br />
            <br />
            If you’re healthy you’re not a customer
            <br />
            <br />
            Incentive is not duress
            <br />
            alternative government with upholding of civil rights thumbprint.us
            saverparty.xyz micro-theory.com bankingisnot.biz poverty-reduction
            depends on equity-security,
            freedom-of-non-objective-or-logistical-minimal-viable-product-proof-discrimination
            and technological advancement without nationalized assets lightte.ch
            edit: withdrawal is triggered by both, sale is triggered by
            entrepreneur per not cancel, suspension, scheduling, but
            renumeration to cash:debt annual gains based on 3under2.us
            Free-Rider principles and micro-theory.com equity by
            individual-autonomy to not harm any in making policy in benefiting
            another, and keep productivity-high, waste-labor and
            convictions-reasonable. This benefits society and
            civil-equity-rights as it does per shares and common-innovators
            instead of latent-prohibitors that do not curry-favor of the least
            frugal consumer but hoard their land, future- and previous-earnings
            in usury by item, fraud, counterfeit, prisoners' dilemma, or money;
            that which is to not use as in sell but lend, an identifiable
            intent-to-harm given price-elasticity of Supply and Demand marginal
            parties' frugality to price-determination. Monopsony by
            central-authorities in R&D is IP taken from common-innovators with
            voluntary customers Royalty-contracts w max-profit stewardship
            (disburse upon sale or withdrawal) and depositary-consortium
            (deposit upon QE). Ponzi is legal if goods (warehouse) but not if
            money (insurance, fraud, counterfeit) since prisoner’s dilemma
            duress is intent to harm, not use (usury). micro-theory.com teaches
            monopsony or other third-party dead-weight can be margin-targeted by
            policy and Class-action-suit
            <br />
            <br />
            The Great Depression was caused by paying bonds off/foreclosures, by
            the way. The income-inequality drop then could be the cessation of
            passive-income...
            <br />
            <br />
            Rentier do not provide housing, buyers don’t, builders
            <br />
            <br />
            You want growth? You want more people? That’s nice, but you are
            looking at population growth when you look at GDP growth, and
            otherwise it is price based not on assets but m2
            <br />
            <br />
            when you say importing, do you mean money or items? @larry_kudlow
            econ 101 @77WABCradio
            <br />
            <br />
            sworn oath is bonk it is a threat blumental you gross thing. you are
            re-tarded, but do you have a mental-disabilty or are
            neural-atypical? Capable-becoming violent cannot be assumed
            <br />
            <br />
            You want to detain people without a crime? While you allow serflords
            and banksquatting? @BrooklynDA heat rises - Vaults - 30under5.us
            magnate.company @vaultbiz
            <br />
            <br />
            Bail strike you let people out @JCats2013 has been saying and now he
            has you on @FCC
          </div>
          <br />
          <br />
          @aclu #cfius your inability to do math is not my mental illness, no
          humoral mind is ill by definition @JudiciaryDems @SenJudiciaryGOP
          <br />
          <br />a better deal is to buy it after repossession & down-payments
          reimbursed ol' coot @marklevinshow not refinancing @AFCMortgages @ftc
          prohibiting trade is counterfeit once spent on a nonconsensual promise
          of another consumer
          <br />
          <br />
          Can we stop calling bank-squatting, homeownership @PoppyHarlowCNN
          @SECEnfDirector like treasury shares not in outstanding @ftc you guys
          don’t care! #MinnesotaIsGuilty @WellsFargo #WellsFargoIsInnocent
          #ChauvinTrial @NerdWallet @fcc
          <br />
          <br />
          a central authority cannot be circular @japan
          <br />
          <br />
          labor*resource Supply is unchanging with Demand
          <br />
          <br />
          Monopsony by central-authorities in R&D is IP taken from
          common-innovators with voluntary customers
          <br />
          <br />
          <Cable
            style={{ maxWidth: "100%", width: "300px", height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noslideshare
                ? ""
                : "https://www.youtube.com/embed/sPfD1-UXp4Q"
            }
            float="left"
            title=""
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ maxWidth: "100%", width: "300px", height: "440px" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.noslideshare
                ? ""
                : "https://www.slideshare.net/slideshow/embed_code/key/8UPMKsiboWfRgT"
            }
            float="left"
            title="https://www.slideshare.net/NicholasCarducci/vaultsbiz"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
        </div>
        {/*<Intro handleScollImgError={handleScollImgError} ios={this.state.ios} /> */}
        Any claim raises premium, and not doing so lowers premium, but expiring
        claims is a principal collective flaccid loss, insurer work deficit
        exemplified and exhibited.
        <br />
        <br />
        "people are against mandates, but not vaccines," means they are against
        article 4 beyond multiple of 11/12 various industry jury permit in
        duress withing minimal viable product, microeconomic theory is the basis
        for Free market, and finite producers before perfect equillibrium of
        demand and exclusively labor propensity to spend a per hour
        price-deflation&nbsp;<a href="https://froth.app">output</a>.
        {/**context (three word chant) or call to action */}
        <Cable
          style={{ width: "100%", height: "1000px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.props.nofred
              ? ""
              : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Ksmd&width=500&height=880`
          }
          float={"left"}
          title="https://fred.stlouisfed.org/graph/?g=Ksmd"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        {/*<TwitterTweetEmbed
          tweetId="1381992128549560321"
          //onLoad={(e) => console.log(e)}
          options={{ height: "400px" }}
        />
        <Frame ref={this.props.iframe} />*/}
        <h2>
          <a href="https://vianickcarducci.medium.com/raising-money-without-dilution-or-debt-a4cb20164356">
            from this idea
          </a>
        </h2>
        {/*<TwitterTweetEmbed
          key="id"
          tweetId={"1381992128549560321"}
          /*onLoad={(tweetWidgetEl) => {
                  console.log(parent.twitterString);
                  const tweetEl = tweetWidgetEl.shadowRoot.querySelector(
                    ".EmbeddedTweet"
                  );
                  tweetEl.style.width = "100%";
                }}*
              />*/}
        &bull;{space}13d-retail anon uuid
        <br />
        &bull;{space}‘Social media “trend” of trading $stocks’
        <br />
        &bull;{space}price-fixed prices for bonds and collateral only
        <br />
        parks playgrounds streets," is collective flaccid loss if escrow or
        profits in{space}
        <a href="https://scopes.cc">business account</a>, national bridge tolls
        never makes a collective bargain, just net loss profit being "network,"
        market of market target margin consumer surrogate maintainable and
        operation-costable. APPLE end to end fraud makes no improvement with a
        'reader app'
        <br />
        <a href="https://nationalsecuritycasino.com">discrepancy</a>.<br />
        <Cable
          style={{ width: "300px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1R1803vorhGSiEDkmUJUoq4MsIAG5KlG5/preview"
          }
          float={"left"}
          title="American Agenda (Newsmax) - WSJ Poll: 'Hispanics are evenly split between parties'"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        login.gov convict intranet cause malfeasance 216/day missing child (FBI
        2015). Jaeson Jones, "control miguel alimon
        {/*degalfo, PII, ensure money they are owed or a plan to get back to criminal organization in a foreign country */}
        , don't want to lose that because you lose the money, so you can
        understand their livelihood motive, they need to have their collateral
        and asset prices,protected. degalfo, PII, ensure money they are owed or
        a plan to get back to expert jury saveface lest malpractice or
        collateral correction. You can see it because they are not arresting
        anybody."
        <br />
        <br />
        Non-voting eligible and detesting wall st pharma cop ideological duress
        don’t count? You have a plural minority simple majority coalition
        <br />
        <br />
        Sheriff David Clark: "Recklessness to the [upteen]th degree," is more
        accurate then tenth, how absurd it is to unit-measure recklessness
        before wreck like a damned insurer work deficiter.
        <br />
        <br />
        <h2>
          <a href="https://pipe.com/blog/pipe-vs-loan#:~:text=You%E2%80%99ll%20pay%20back%20what%20you%20pulled%20forward,%20based%20on%20timing%20of%20your%20recurring%20revenue%20streams">
            1-level-board
          </a>
          , non-voters{space}
          <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
            win
          </a>
          {space}against ideological duress of{space}
          <a href="https://teapharmacy.party">wall st pharma cop</a>
          {space}(still have my nugg) plural minority duopoly, libertarians
          hypocrite, nationalized broadband network fees isn't socialism
        </h2>
        m2 bond value $3k/yr/p, $12k/yr/p debt due why would you work against
        than for copy treadable by you, make paytech to trade and take donations
        by debit, velocity of m2 minus gdp divided by m2 minus
        currencyComponentOfM1 times currencyComponentOfM1 1/11 gdp and
        mv1===mv2==gdp but 2010-2020 $4t/yr fed spending 60% Free Rider mutable
        government gentrification and rent seeking Tax, 40% debt spending 1/4
        1/4 1/4 10% debt-service, 50% njta. multiple of 11/12 various industry
        jurors for Free Rider mutable sewage police lawyer elsewise, collective
        flaccid loss group accounts are, especially
        {space}
        <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
          third party beneficiary donee claimable expiring claim false bid pool
          laundering and loitering on collateral, materials or labor, options
          and partial down payments sold on estimates
        </a>
        .
        <br />
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ gentrification: !this.state.gentrification });
          }}
        >
          <h3>gentrification</h3>
        </button>
        <br />
        <div
          style={{
            zIndex: this.state.gentrification ? "0" : "-9999",
            position: this.state.gentrification ? "relative" : "fixed",
            width: "100%"
          }}
        >
          Omg Juliet Huddy, buying vaccines for people is useless price
          inelasticity and gentrification
          <br />
          <br />
          Gentrification or price inelasticity, Might be a boost to them, but
          you can get the same thing if the ask moves to meet the bid
          <br />
          <br />
          Gov Pete rickets, transitory is inflation, that’s what that means, the
          opposite of transitory is isolated
          <br />
          <br />
          "Funding researchers," (re: Dick Morris) doesn’t "create innovation,"
          consumers becoming researchers does, INTEGRALLY, epiologically. We
          must target margin networks, finite supply and utility patents,
          copyright and consensus-democracy is exclusively-sufficient
          <br />
          Dec 2020 unemployment 7m 65+ retired 1/3rd now -1.4m (4.5m), 25-54/3
          -400k (34.4m), 15-24 -300k(20.6m), (by 5/2020) 25-54/3 37.5m, 15-24
          20.9m, (by 2/2020), 65+ 5.9m, 25-54/3 34.8m, 15-24 20.9m
          <br />
          Social security is paid for that is 44x impossible, we should instead
          of continue or cancel, reverse debt:cash*purchases
          <br />
          <br />
          Can’t run debt without either:
          <br />
          1) customers being on time to meet borrower/investor expectations
          <br />
          2) money disenfranchisement
          <br />
          3) making amount outstanding literally impossible
          <br />
          <b>#money</b>
          <br />
          <b>#preciousmetals</b>
          <br />
          <b>#ppploans</b>
          <br />
          all gov spend is unequal treatment, price-fixing and monopolization
          <br />
          duress to be price-inelastic
        </div>
        <br />
        <hr ref={this.props.work} />
        <div
          style={{
            color: "black",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 0 })}
          >
            $64 printed, $3k valued, $12k burn
          </div>

          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 1 })}
          >
            trueGDPperPerson
          </div>

          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 2 })}
          >
            perDollar
          </div>
          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 3 })}
          >
            rental-income
          </div>
          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 4 })}
          >
            employmentByCohort
          </div>
          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 5 })}
          >
            (1/prices)/hours
          </div>
          <div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 6 })}
          >
            prices/hours/people
          </div>
          {/*<div
            style={{ cursor: "pointer", backgroundColor: "rgb(140,200,255)" }}
            onClick={() => this.setState({ fraudChoice: 7 })}
          >
            $1m promised per person every quarter
          </div>*/}
        </div>
        <div
          style={{
            position: "relative",
            height: "min-content",
            width: "100%"
          }}
        >
          <div
            style={{
              zIndex: this.state.fraudChoice === 0 ? "0" : "-9999",
              position: this.state.fraudChoice === 0 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=K4YV&width=500&height=600`
              }
              float={"left"}
              title="$64/yr printed checking currencyComponentOfM1, $3k/yr as m2, $12k/yr promised, https://fred.stlouisfed.org/graph/?g=K4YV"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 0 ? 0 : this.props.scrollTop
              }
            />
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=K4YC&width=500&height=600`
              }
              float={"left"}
              title="$64/yr printed checking currencyComponentOfM1, $3k/yr as m2, $12k/yr promised, https://fred.stlouisfed.org/graph/?g=K4YC"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 0 ? 0 : this.props.scrollTop
              }
            />
            park deeds depositary, treasury shares not with standing outstanding
            in price to earnings, tread on copy instead of work against that
            nonsense third party beneficiary donee claimable, with
            max-profit-royalty of 1-level-board, collective bargain beats
            collective flaccid loss in schedule non-concurrentable depositary
            bank like equity can be (fractional reserve, public nor private,
            expiring claims nor estimate of labor and material).
            <br />
            {/*<FraudMoney iframed={iframed} />*/}
            $821/person/day new debt public and private, -10x/20%/year ==doubles
            every 5 years, f busy-work and price of bid-to-ask inelasticity of
            quality/price, the upsidedown of productivity. tech adv comp bargain
            innumerable loss of slavery, numbers for naught by plantation-owner
            work deficit
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 1 ? "0" : "-9999",
              position: this.state.fraudChoice === 1 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=KKdT&width=500&height=600`
              }
              float={"left"}
              title="(((v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1) - NM - ND) / P - https://fred.stlouisfed.org/graph/?g=KKdT"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 1 ? 0 : this.props.scrollTop
              }
            />
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/OqgUxnqc3AM"
              }
              float={"left"}
              title="gdp/down and doubling hours per home every 5 years, 5x hours per worker and 2x workers per person (much fixed for diminishing rate of change)"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 1 ? 0 : this.props.scrollTop
              }
            />
            ((v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM
            - ND)/P
            {/*<Fraud iframed={iframed} />*/}
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 2 ? "0" : "-9999",
              position: this.state.fraudChoice === 2 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Ck6f&width=500&height=600`
              }
              float={"left"}
              title="(( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 - NM - ND) / P) / currencyComponentOfM1"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 2 ? 0 : this.props.scrollTop
              }
            />
            (( (v2- (GDP/(m2-currencyComponentOfM1)) )*currencyComponentOfM1 -
            NM - ND) / P) / currencyComponentOfM1
            {/*<Fraud2 iframed={iframed} />*/}
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 3 ? "0" : "-9999",
              position: this.state.fraudChoice === 3 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=FSwQ&width=500&height=600`
              }
              float={"left"}
              title="55+ 20x 25-34 rental-income, per person - https://fred.stlouisfed.org/graph/?g=FSwQ"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 3 ? 0 : this.props.scrollTop
              }
            />
            {/*<Fraud3 iframed={iframed} />*/}
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 4 ? "0" : "-9999",
              position: this.state.fraudChoice === 4 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=600`
              }
              float={"left"}
              title="65+ 1.2x 55-64 and 1.3x 25-54, per person; that's 2.4-2.5 elders for every 3 working-age - https://fred.stlouisfed.org/graph/?g=H5XB"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 4 ? 0 : this.props.scrollTop
              }
            />
            <TwitterTweetEmbed
              style={{ float: "left", width: "300px", maxWidth: "100%" }}
              key="1433857610923532288"
              tweetId="1433857610923532288"
            />
            {/*<Fraud4 />*/}I was thrown by 8m unemployment benefits, but as you
            can see, employment rate by population (I mistakenly was using
            <a href="https://fred.stlouisfed.org/graph/?g=FSxx">
              *employment level trying to maintain monthly rate that for 65+
            </a>
            , we don’t have ...without subtracting the others from the whole,
            wouldn't be worth the title space) is the same... where is
            unemployment benefits going too when new people have been employed
            <br />
            <br />
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.state.noyoutube
                  ? ""
                  : `https://www.youtube.com/embed/TjvqmfDvOfQ`
              }
              float={"left"}
              title="continuing claims"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 4 ? 0 : this.props.scrollTop
              }
            />
            -2m is 65+, the others have swapped out and kept the people who were
            given up for others on unemployment (abject fraud)
            <br />
            <br />
            As many denominator, as much when fixed for ratio (diminishing rate
            of change)
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 5 ? "0" : "-9999",
              position: this.state.fraudChoice === 5 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Gkvt&width=500&height=600`
              }
              float={"left"}
              title="(1-price)/hours - https://fred.stlouisfed.org/graph/?g=Gkvt"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 5 ? 0 : this.props.scrollTop
              }
            />
            {/*<Fraud5 iframed={iframed} />*/}
          </div>
          <div
            style={{
              zIndex: this.state.fraudChoice === 6 ? "0" : "-9999",
              position: this.state.fraudChoice === 6 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=Hc1R&width=500&height=600`
              }
              float={"left"}
              title="(1-price)/hours - https://fred.stlouisfed.org/graph/?g=Hc1R"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 6 ? 0 : this.props.scrollTop
              }
            />
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/OqgUxnqc3AM"
              }
              float="right"
              title="gdp/down and doubling hours per home every 5 years, 5x hours per worker and 2x workers per person (much fixed for diminishing rate of change)"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 6 ? 0 : this.props.scrollTop
              }
            />
            {/*<Fraud6 iframed={iframed} />*/}
            $821/person/day new debt (value), $21917/person/day (laundering and
            loitering now) public and private, -10x/20%/year ==doubles every 5
            years, f work
            <br />
            <br />
            <a href="https://nationalsecuritycasino.com">
              scarcity begets labor competition
            </a>
            , article{space}
            <a href="https://vaults.biz">4 only Tax</a>
            <br />
            without dead weight from finance, gdp/p - bonds is 1/11 gdp/p, C+I+G
            is redundant, NE is bad, (selling-out, pushover for government
            gentrification, accrual non-rollover misappropriation of doctors on
            seasonal contracts of brought forward demand)
            <br />
            <br />
            Truncated{space}
            <a href="https://saverparty.xyz">sales Tax Free Rider</a>
            {space}Immutable sewage police lawsuits
            <br />
            <a href="https://2052.live">bacteria</a>
            {space}is{space}
            <a href="https://froth.app/stats">daddy</a>
          </div>
          {/*<div
            style={{
              zIndex: this.state.fraudChoice === 7 ? "0" : "-9999",
              position: this.state.fraudChoice === 7 ? "relative" : "fixed",
              width: "100%"
            }}
          >
            <Cable
              style={{ width: "540px", height: "700px" }}
              onError={handleScollImgError}
              //img={true}

              src={
                this.props.nofred
                  ? ""
                  : `https://fred.stlouisfed.org/graph/graph-landing.php?g=KKxy&width=500&height=600`
              }
              float={"left"}
              title="price/hours/people - https://fred.stlouisfed.org/graph/?g=KKxy"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={
                this.state.fraudChoice !== 7 ? 0 : this.props.scrollTop
              }
            />
            {/*<Fraud7 iframed={iframed} />}
            </div>*/}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ juryduty: !this.state.juryduty });
          }}
        >
          <h3>juryduty</h3>
        </button>
        <br />
        <div
          style={{
            zIndex: this.state.juryduty ? "0" : "-9999",
            position: this.state.juryduty ? "relative" : "fixed",
            width: "100%"
          }}
        >
          no science monopoly! input goods & hours, play fantasy with
          "warehoused nannies"
          <br />
          <br />
          Is finance anywhere in there? Well it is 5% of the 60% employed (U.S.)
          but have price-fixed “assets” at at 11x (Cash is market share,
          tangibly)
          <br />
          <br />
          If those are collateralized, but that is not different than being able
          to cash out at these price-fixes & cornering of assets from the market
          participants
          <br />
          <div>
            Banks need to explain to people how we will segway to a sales Tax,
            customer-appropriating economy. New fintechs like mine
          </div>
          <br />
          <div>
            We can retain interests of people but remove those of
            government/money-renters by exclusively funding it by the sales Tax
            of the location of the purchaser. Fintech should label customer
            location for merchants, and allow location spoofing at checkout to
            protest
          </div>
          <br />
          <div>
            Third victim is Unfair for those entrepreneurs/competitors who don’t
            borrow they have to deal with these “brought forward” prices
          </div>
          <br />
          <div>
            This is what consumer purchase investment gets you. This isn’t
            anyone’s right to manipulate the market by bringing demand forward.
            If they do they better not use compounding interest to compel you to
            pay it back, since that requires the unrequited consent of a saver
            or Fed splits
            <br />
            <br />
            mediates partners among many variables. It’s a way to function in
            the no debt-economy I imagine. Will have a currency if it gets at
            scale to redeem any non perishable on camera in vault.
            <br />
            <br />
            <b>Not taking investors just critics</b>
            <div>
              "It’s [not] a good way to find owners" but they should amortize it
              into a payday loan & reverse to prices without debt (current
              cash/current debt) * collateral
            </div>
          </div>
        </div>
        <Cable
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : `https://www.youtube.com/embed/A2kSh0A8Ad0`
          }
          float="right"
          title="Future of voting - thumbprint.us/voting"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        Rank choice will sabotage 38% protest & eligible voters, swing voters
        can stay home under auspice of excess deaths ignoring population growth
        <br />
        <br />
        <a href="https://lightte.ch">SBA is funding non-profits</a>
        {space}with public-park-share-split for existing-business monopsony that
        do not pay-income Tax to ensure the equity is the governments'
        technological gentrification to prohibit natural labor-competition and
        become too close as to be malfeasant of target margin networks or finite
        producers
        <br />
        <br />
        political persecution by hackensack meridian, called bizarre for calling
        accrual bizarre, 13 days committed
        <br />
        <br />
        can never be paid back, service is 10-40% of outlays like gdp/p - bonds
        is 1/11 of gdp/p. The bond-index-funds trade like another economy to
        collateralize promises. timeless royalty always fails, and
        general-income payday surrenders non-rollover for signee's consumers at
        a useless price inelasticity to boot
        <br />
        <br />
        {/**capitalism */}
        <h1 ref={this.props.sdr}>transaction-based-sdr</h1>
        "What kinds of things would become currency if society were to break
        down? "
        <br />
        Nick Carducci - Legal Writer & Software Engineer at Vaults.biz
        (2020–present)
        <br />
        Salts, coffee, maybe lumber, any non-unique nor perishable, and
        concurrentable units:
        <br />
        as opposed to good will, expiring premiums, estimated claims, invoices,
        accrual and donee invocations.
        <br />
        Operationally, a local bookie (with grades, ask and bid, guess and
        check) would facilitate a vault share with transaction fees. Do not let
        anyone tell you, “sdr requires debt.”
        <br />
        Put dollars v bonds in court and I swear to G-d and you that Savers will
        take all of U.S. state lands and resources (20%).
        <br />
        Max-royalty and Truncated Production Tax will replace debts, after
        well-medicated (cash/debt)*income every year back so that we all paid
        what we would have without surrendered freedom of contractor liability
        implied by EULA, Tranquil and voluntary trade.
        <br />
        <br />
        max-royalty 1/12 industry{space}&bull;{space}
        Truncated sales Tax Free Rider Immutable sewage police lawsuits geohash
        transaction line, congress only needs to see sum per month
        <div id="t1255155430264799233" />
        <br />
        <div>
          <a href="https://saverparty.xyz">saverparty.xyz</a> - Consumer
          Advocacy
        </div>
        <div>
          <a href="https://micro-theory.com">micro-theory.com</a> - Game theory
        </div>
        <div>
          <a href="https://vau.money">vau.money</a> - Fiscal Solution / Tax 3%
          under first 2k on protestable locations for geohash in transaction
          line for accounting software
        </div>
        <div>
          <a href="https://scopes.cc">scopes.cc</a> - Fiscal Solution /
          Pay-To-Sprint unlock employee debit + timeclock
        </div>
        <div>
          <a href="https://thumbprint.us">thumbprint.us</a> - Republic Solution
        </div>
        WAIT A SECOND: IF {"<"}$10k gifts aren't taxable, but {"<"}$2k sales
        are. I have no problem with allowing non-Tax trade for business without
        a brand name but instead a person
        <br />
        <div id="t1269812890653134848" />
        <br />
        <br />
        <div
          ref={this.props.bottom}
          style={{
            backgroundColor: "rgb(250,250,250)",
            color: "rgb(5,5,20)"
          }}
        >
          <h1>Butt to cell immunofluorescent microscopy</h1>
          CNN gaslighting every viewer that 62% (of 330,000,000) want this
          (sample of under 3,000 people, without shuffling to boot). Add more
          results like isidewith or thumbprint.us
          <br />
          when buy Greenland IRS
          <br />
          <br />
          <a
            href="https://saverparty.xyz"
            style={{ color: "black", display: "flex", wordBreak: "break-word" }}
          >
            <h1 style={{ wordBreak: "break-word" }}>Saver Party</h1>
            <span style={{ color: "grey", wordBreak: "break-word" }}>xyz</span>
          </a>
          <span>
            demand-side conservatism (consent, no supply intervention by
            non-producing, scalping, serfdoms, leases and allow prices to be met
            and exactly settled by producers and consumers)
            <br />
            Trade is good for comparative advantage in teamwork akin to fixed
            trading of mutual benefits. All other actors are interference.
          </span>
          <br />
          <div
            ref={this.props.invite}
            style={{
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            No government-monopsony when given Free-Rider-Immutable authority
            <br />
            2% of the population owns 4400% of the assets
            <br />
            <br />
            This is M2; $300k per person a year promised out of no-where, $70k
            per person a year given to gov monopsony contractors for
            Free-Rider-mutables beyond Free-Rider-immutables.{space}
            <a href="https://foiegras.life">Bloated demand</a>
            {space}for Free-Rider-mutables<b>{space}does not create jobs</b>
            <Cable
              style={{ width: "100%", height: "400px" }}
              onError={handleScollImgError}
              //img={true}

              src={this.props.nofred ? "" : `https://froth.app`}
              float={"left"}
              title="2% of the population owns 4400% of the assets"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={this.props.scrollTop}
            />
            Efficiency (labor-equity) Act & Accord
            <br />
            1. Taxes are slavery except Free-Rider-Immutable services, below
            <br />
            2. Sales Tax is efficient, under $2k buys:
            <br />
            first grand is $60, second is $30 (6%, 3%)
            <br />
            a. Local police/plow/sanitation
            <br />
            b. tollless roads
            <br />
            c. supreme courts. (new: if justice wouldn't lessen their pay)
            <br />
            <br />
            <b>
              Trash, water & electricity is Free-Rider-mutable; equity-,
              societal-security and toilets are not
            </b>
            <br />
            The right [to be included without court-certified-evidence of mvp]
            is not from Civil Rights it is Free-Rider-excluder enslaving those
            denied not based on mvp, of as evidenced as a cease-and-desist
            defamation order would require.
            <br />
            <br />
            Here, you must prove condensation does not happen @uscourts
            @neiltyson
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            Nick Carducci
            <h2>Regulations</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            I. forbid investment bank "savings" label
            <br />
            II. forbid insurance pyramid schemes, unless gift certificate
            broker...
            <br />
            III. forbid prosecution for non-payment after service
            <br />
            IV. forbid time-based royalty & consumer purchase investment
            <br />
            V. forbid renting more than 5 abodes & storefronts for income
            <br />
            VI. producers refund previously paid debts to cash:debt original
            principal ratio! Where we would be if we had intervened in the
            market intervention of promises raising market price and skipping
            the marginal cost to earn that money based on a combination of
            producer greed & consumer prisoner's dilemma duress or promise
            <br />
            VII. only can disburse business-acc-money upon withdrawal or sale
            and protect per industry not just name
            <br />
            VIII. We can retain interests of people but remove those of
            government/money-renters by exclusively funding it by the sales Tax
            of the location of the purchaser. Fintech should label customer
            location for merchants, and allow location spoofing at checkout to
            protest
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              maxWidth: "600px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div id="t1311661410565398528" />
            <br />
            <h2>Mantra</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            price elasticity is our ally
            <br />
            invoices our enemy
            <br />
            credit is youth-abuse
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              maxWidth: "600px",
              padding: "20px",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h2>Candidates</h2>
            <br />
            <div
              style={{
                position: "relative",
                border: "3px solid"
              }}
            >
              <img
                onClick={() => (window.location.href = "https://carducci.sh")}
                style={{ width: "60px", height: "auto" }}
                src="https://www.dl.dropboxusercontent.com/s/eauftjactpq8rnz/me.png?dl=0"
                alt="https://carducci.sh"
              />
            </div>
            Nick Carducci
            <br />
            <div>
              nickcarducci2022.com
              <a
                style={{ textDecoration: "none" }}
                href="https://nickcarducci2022.com"
              >
                &#9998;
              </a>
            </div>
            US Senate 2022
            <br />
            <i>invoices are theft!</i>
            <i>writing "Banking is not a Business"</i>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              alignItems: "flex-start"
            }}
          >
            you gotta earn that money back from the person you buy from, or you
            forced your customers to invest in those. You couldn’t promise
            Amazon shares you don’t own to buy a house. It is cornering assets,
            duress of the borrower and involuntary servitude of the people with
            money, which isn’t even enough. Royalty w/max-profit on business
            lines without market-colonialism, renting out more than you can use
            or bills
          </div>
          <a href="https://micro-theory.com">Micro-Theory.com</a>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            maxWidth: "90%",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          Plainly, the federal reserve has abetted contracts compelling them to
          disenfranchise savers, while enforcing them to use the legal tender to
          trade tangible goods <em>by threat of arrest & garnishment</em>
        </div>
        <h2>to these missions</h2>
        <div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              borderTop: "1px solid black",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h2>
                Steward Mission-Critical Contracts for Entrepreneurs & Investors
              </h2>
            </div>
            <br />
            <div id="t1268992816551792641" />
            <br />
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                border: ".5px dashed silver",
                maxWidth: "100%",
                width: "250px"
              }}
            >
              • Guide return schedule to deliver upon (1) executive withdrawal
              for personal expenses, or (2) revenue. If you choose (2), you can
              rely on our cash flow reports (soon) - account spending, payroll
              or payouts must be unanimous or we will lock future paying on
              behalf of the whole. If you choose (1), the investee or executive
              withdraws are omnipotent on payout execution, but spending and
              payroll can still be halted by any shareholder. However, if we are
              facilitating a sweat equity contract & you choose (1), the
              executive can claim autonomy over payroll and spending. Before
              profit, your initial investment must be approved for each payment.
              If you choose (1) and the account has 50% more that your payout
              you can gain your own payout autonomy, given your position in
              schedule.
            </div>
          </div>
        </div>
        Capital gains or loss is not a tangible loss. It is your fault for not
        trading when an offer was available at the price you prefer. It is a
        valuation of last trade and not all shares outstanding can afford that
        price or are even included in the outstanding lot sometimes
        <br />
        <br />
        inheritance, gift, large item sales and capital gains Tax is an{space}
        <a href="https://billbiden.org">issue for antitrust</a>
        <br />
        <br />
        The following page is dedicated to the forces/special-interests against
        or to distract from the problems that vaults.biz below the screencaps
        can solve
        <br />
        with some humor hopefully
        <br />
        <br /> positivity (as a grade) for markets is{" "}
        <a href="https://wavv.art/forumSPcWzET32uuUgtnQ43Gi">
          efficiency, not price
        </a>
        <br />
        You cannot title your forum with wiki and not allow exploration of
        <br />
        not only is it dangerous but false-advertising and exclusion which is a
        violation of Amendment 13
        <h4>STOP PROMISING OTHER PEOPLE('s) MONEY THAT (isn't) YOURS </h4>
        <h2>
          by helping prosecutions for invoices, regulators are abetting and in
          some cases unfairly benefiting from this cornering of assets
        </h2>
        <h1>stop calling fixing the game a national security issue</h1>
        securities law normally forbids that
        <br /> <br />{" "}
        <a
          href="https://Micro-Theory.com"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(230,230,230)",
            color: "rgb(20,20,20)"
          }}
        >
          Micro-Theory.com
        </a>
        <br />
        <Cable
          style={{ height: "440px", width: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/6sdb1ltl8dzknef/LinkedInFinancialGoober.png?dl=0"
          }
          float="left"
          title="bragging about stealing"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <a href="https://wavv.art/forumSWcEKuozb7ZMi8DYjzYe">
          wavv.art/forumSWcEKuozb7ZMi8DYjzYe
        </a>
        <br />
        I do not consent
        <br />
        <a href="https://wavv.art/forumFxAQdrXttNEHDKYIOyqH">
          wavv.art/forumFxAQdrXttNEHDKYIOyqH
        </a>
        <br />
        <Cable
          style={{ height: "440px", width: "auto" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/2vr9cl87evko2lq/LinkedInPirate.png?dl=0"
          }
          float="right"
          title="not your money to promise"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        <br />
        <a href="https://wavv.art/forumM5HXnCf1dori1204jyto">
          borrow to short borrowers
        </a>
        <br />
        <h1>Vaults.biz</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ ftccomplains: !this.state.ftccomplains });
          }}
        >
          <h3>ftccomplains</h3>
        </button>
        <br />
        <div
          style={{
            zIndex: this.state.ftccomplains ? "0" : "-9999",
            position: this.state.ftccomplains ? "relative" : "fixed",
            width: "100%"
          }}
        >
          <div
            style={{
              display: "block",
              border: ".5px dashed silver",
              width: "100%",
              maxWidth: "600px",

              transition: "1s ease-out"
            }}
          >
            advertising gov services as Free is incorrect per people with money
            that is share-split but also those with assets that those shares are
            customers of given the person with assets want to start owning the
            certificates in place of their assets or even actually what they
            lose in what their customers lose in their ability to capture the
            assets with their faulty-certificates is a cost. If you use the same
            resources as I have the potential to trade with you for, even if we
            use separate currencies in our own economies, you diluting yours is
            not good for me in having you get what I want
            <br />
            <br />
            <hr />
            Infrastructure bill by Tom Malinowski is like ghost cities
            overproduction by share splitting nonconsensually and by no material
            benefit to boot (if you rely on voluntary consumption, the same
            products are made but at lower costs for all)
            <hr />
            <br />
            Not only is it harmful in itself and its effects, it is treason
            providing aid and comfort in its most guaranteed form in involuntary
            servitude to foreign-bond holders from those with the money and
            those that owe the money. voluntary debt is involuntary servitude of
            those with the money, but still slavery for the voluntary
            price-fixer as the more pertinent definition of slavery is
            impossible or under-duress contracts
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
              }}
            >
              <div
                className="dots"
                style={{
                  height: "15px",
                  alignItems: "center",
                  width: "30px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div />
                <div />
                <div />
              </div>
            </div>
            That’s right, and there is not a new precedent of illegality
            required to be mounted. In order to use the service, we must agree
            to share data with unnecessary third parties. That is an agreement
            made under duress, to not be a slave to a non-inclusive economy.
            When a service becomes so predominant and there aren’t as many tech
            alternatives as there are corner-store alternatives, it becomes less
            of a choice and more of slavery, giving but unable to take without
            harm of sharing data to marketmakers and non-abstracted advertising
            services in the platform. Data collection by any other means than
            for use in-platform is a contract to give up the right to hide
            expression and generally not do harm to oneself in order to be
            included. That doesn’t include in-network advertising since that
            could be considered necessary for the product; yet as another issue,
            in my tests, the impressions or responses on in-network Facebook ads
            are fake profiles. Certainly requires an audit
          </div>
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "100%",
              padding: "5px",
              display: "table",
              border: ".5px dashed silver",
              position: "relative"
            }}
          >
            Nicholas Carducci shared 12/29/2020 I don't believe there is one
            morsel of debt or consumer royalty that is not akin to colonialism,
            but on a market-specific level. I do believe that a
            Class-action-suit could be filed for reversing funds back to 1913 to
            each year's cash:debt level. Most GDP is debt, and only 50% has been
            going back to personal income (everything saved is lent for more
            than exists). In fact, there is not one debt or payday loan that
            could not be argued for the above remedy a as a solution with
            Amendment 13, the Sherman Act prohibiting trade (and renting-out
            more places to use/sell for yourself by the way). It is wagering
            others' money unless it is a business partnership on the merits of
            an invention or team, since that individual has patrons or that
            individual cannot BE, while a business contract can exist while not
            eating, with health and in shelter. Wagering someone else's money is
            so in debt and consumer royalty but not business
            location/customer/intellectual-property royalty with max profit. I'd
            pref copyright as the extent of IP as a consumer and web product
            owner... I may have to be a medical inventor to care, but only to
            consider time spent in invention and thereby scope of copyright.
          </div>
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "100%",
              padding: "5px",
              display: "table",
              border: ".5px dashed silver",
              position: "relative"
            }}
          >
            Joseph Mandla Maseko shared 12/29/2020 Hi Nicholas Carducci. Thanks
            for the contribution. It seems to cover several points. I will
            search for some literature, off-line, to see how one can pyramid the
            content and converge it within the issues of triggers and propellers
            of over indebtedness. Much appreciated. In the meantime, could you
            kindly favour the forum with a copy of the Amendment 13, the Sherman
            Act at all? It would be much appreciated.
            <br />
            <br />
            <hr />
            Nicholas Carducci shared 12/29/2020 Thank you Joseph Mandla Maseko
            for the opportunity to provide my guidance on your work.
            <br />
            <br />
            I believe these U.S. laws describe the following as illegal:
            <br />
            <br />
            debt, {">"}1month rent and invoices if involuntary trade is
            servitude and monopolization is colonization of a market without
            producing, buying or closing a trade by promising money that they do
            not own.
          </div>
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "100%",
              padding: "5px",
              display: "table",
              border: ".5px dashed silver",
              position: "relative"
            }}
          >
            This is the U.S. Constitution Amendment 13: "Neither slavery nor
            involuntary servitude, except as a punishment for crime whereof the
            party shall have been duly convicted, shall exist within the United
            States, or any place subject to their jurisdiction." <br />
            <br />
            The Sherman Act according to the U.S. Federal Trade Commission: "The
            Sherman Act outlaws 'every contract, combination, or conspiracy in
            restraint of trade," and any "monopolization, attempted
            monopolization, or conspiracy or combination to monopolize.'"
            <hr />
            <br />
            Finally, I hope you can apply the following rubicons and triggers as
            a point of over-indebtedness. Debt is a currency stockholder
            decision, but distribution of profit and outlays is not. The trigger
            is the first usurped contract promising other peoples' money and
            under duress by others price-fixing to also borrow under a
            prisoner's dilemma situation. You may also try to estimate how much
            of the debt would be invested in commodities, property,
            equity/royalty or royalty with max-profit if debt & renting-out more
            than 5 properties out were banned to highlight a numerical or
            relational investment to capita or cash outstanding trigger to be
            promised based on investor-diligence of actually getting money back
            without private lender intervention, not cashing-out at price-fixed
            valuations or inevitably extending terms or foreclosing for the
            asset they should have bought from the start themselves if they want
            it... That is where I would define the point of becoming
            over-indebted if I were to assume, for this instance, "indebt" also
            could mean the royalty with max-profit alternative.
          </div>
          <div
            style={{
              width: "400px",
              maxWidth: "100%",
              height: "100%",
              padding: "5px",
              display: "table",
              border: ".5px dashed silver",
              position: "relative"
            }}
          >
            <b
              style={{
                fontWeight: "bolder",
                textDecoration: "underline"
              }}
            >
              Otherwise, promising other people's and your customers' money to
              prohibit them from buying the product directly is too much
              [illegally-cornering weed not by trade but duress, price-fixing,
              counterfeit, involuntary servitude and entrapment], but promising
              a portion of a business line that is not a living-being but a
              switch to distribute money is a fine[legally-finding price by
              trade elasticity]-amount of promising.
            </b>
            {space}
            {space} In my technology solution for this (vaults.biz in
            development 2020-22) I will give the entrepreneur the option to sell
            royalty with max-profit contracts with either an upon-withdrawal or
            an upon-sale tract for automated-distribution and withdrawal-caps. I
            believe the impossible contract depending on the consent of another
            will prove to always garner more investment than royalty with
            max-profit might, and more will turn to equity/royalty, commodity or
            vault-share certificates, but that would be your over-indebtedness
            number in my book, in addition to the over-promising made by any
            consumer or time-based debt at all. For geospatial instance, the
            total debt in the U.S. price-fixes and pays out at $82 trillion : $6
            trillion cash in mid-2020.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "60%",
            border: "blue 1px dotted",
            padding: "10px 20px"
          }}
        >
          The largest atrocity in the history of mankind is the ability to call
          an investment account a savings account, second to instead of trading
          wealth between producer- and consumer- states of humans - the Federal
          Reserve being compelled to print for interest.
          <br />
          <br />
          None of us consented to this.
          <br />
          <br />
          In fact, in academia, the bona fide purpose of investment is to raise
          quality or lower cost or price.
          <br />
          <br />
          Go to Vaults.biz for more context to equity/royalty, my "Federal
          Reserve being compelled to print for interest" usury replacement.
          <br />
          <br />
          The solution to the second problem of majeure compelling debasement is
          to use the ability to set max-profit in any payment-schedule's curve
          on royalty, so the entrepreneur can raise without giving equity. If
          debt were banned, this would take over as a comparably liquid option,
          yet more efficient in how assets are traded by owners as it only
          requires disbursements after revenue. These would not be persons,
          medical practices or cross-industry studios, just investments in
          development projects. This last requirement is to ensure that the
          investment is not used for consumer purchases, and the lender does not
          get money from income outside of their investment from the borrower so
          that the borrower may continue to work for others.
          <br />
          <br />
          A supporting solution to the second problem of majeure compelling
          debasement is to ban invoices after fair warning so that contractors
          must receive payment from customers in advance & services cannot
          charge more than the customer has in non-credit assets.
          <br />
          <br />
          Another supporting solution to the second problem of majeure
          compelling debasement is to ban insurance because they take in more
          value than they deliver, only to raise price which is not investment's
          original purpose in university economics. If their value is curation,
          then create a website.
          <br />
          <br />
          The solution to the first problem of misleading customers is to ensure
          that "depository institution," "depository," "savings," "savings
          account," or "securities" are designated trademark terms for accounts
          that DO NOT LEND and ARE NOT BONDS. Ensure that all "investment
          vehicles" are clearly labeled as such in trade as well.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "80%",

            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>
            Exhibit Socially-Responsible & Effective Per Lowering Price:Utility
            Banking
          </h2>
        </div>
        <img
          src={Tax}
          alt="error"
          style={{
            display: "flex",
            width: "60%",
            height: "auto"
          }}
        />
        <br />
        <div
          style={{
            display: "flex",
            border: ".5px dashed silver"
          }}
        >
          • Enable banking that does not lend to others, ensuring prices are
          found naturally.
        </div>
        <br />
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "80%",

            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>
            Inventory-Share Solidarity
            <br />
            (Long-Term Goal)
          </h2>
        </div>
        <img
          src={math}
          alt="error"
          style={{
            display: "flex",
            width: "60%",
            height: "auto"
          }}
        />
        <br />
        <div id="t1262209560812683266" />
        <div id="1270408381401096192" />
        <br />
        <div
          style={{
            display: "flex",
            border: ".5px dashed silver"
          }}
        >
          • Offer a separate currency that equates to an net-asset-value of the
          inventory of non-unique, non-perishable commodities through a
          network-consortium of on-camera scales & state-of-the-art storage
          facilities.
        </div>
        {/*<Cable
            style={{ height: "440px",width: "auto",  }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://wiki.mises.org/wiki/Bank_of_Amsterdam"
            }
            float="left"
            title="https://wiki.mises.org/wiki/Bank_of_Amsterdam"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />*/}
        <a href="https://wiki.mises.org/wiki/Bank_of_Amsterdam">
          https://wiki.mises.org/wiki/Bank_of_Amsterdam
        </a>
        <br />
        <div id="t1271546956490432512" />
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderTop: "1px solid black",
            width: "100%",
            paddingTop: "20px",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>team</h2>
        </div>
        <div
          style={{
            marginTop: "20px",
            border: "1px solid black",
            width: "max-content",
            marginBottom: "30px",
            color: "white",
            backgroundColor: "blue" //#0000FA
          }}
        >
          nickcarducci
          <br />
          carducci.sh
          <br />
          <br />
          you?
          <br />
          <div
            onClick={() => {
              this.setState({
                openForm: true,
                alsoed: false,
                scrolled: true,
                glad: false
              });
            }}
            style={
              !this.state.openForm ? { cursor: "pointer" } : { display: "none" }
            }
          >
            <br />
            join us / contact
          </div>
        </div>
        <h2
          style={
            this.state.openForm
              ? { display: "flex", cursor: "pointer" }
              : { display: "none" }
          }
          onClick={
            this.state.alsoed
              ? () => this.setState({ alsoed: false })
              : () => this.setState({ alsoed: true })
          }
        >
          legal case
        </h2>
        <br />
        <div
          style={{
            display: "block",
            border: ".5px dashed silver",

            maxWidth: "100%",

            transition: "1s ease-out"
          }}
        >
          • Vaults.biz believes (1) taxes and the notion of ["buying Greenland"
          or{space}
          <strong>
            threatening jail or garnishment for a century then relinquishing
            legal tender namesake
          </strong>{" "}
          & the threats by the police is a human rights issue, (2){" "}
          <span style={{ textDecoration: "underline" }}>
            intentful force majeure, entrapment and prohibiting trade by not
            BUYING THE ASSET THEMSELVES TO USE LATER, FOR THEMSELVES TO USE NOW,
            OR MANIFESTING THE ASSET involving an unrequited third party to not
            compound interest - which requires dollar shareholder splitting
            unrequited for later purchases for any transaction with what should
            be vault-share dollars in addition to at the time of borrowing for
            that specific colonized and spoofed "market"
          </span>
          , and (3) United States public office malfeasance in The Justice
          Department and The FTC for turning-a-blind-eye towards not "Protecting
          American Consumers"] is akin to slavery, colonialism or
          market-specific colonialism cornering assets by forcing "clients" to
          promise money they don't own instead of share of an IP-protectable
          (location & customer or brand) business
          <br />
          <br />
          The police, local courts & facilities, local toll-less roads, and the
          supreme court are the only societal needs without voluntary consumers,
          they can be sufficed with local grocery-store sales Tax and internet
          sales Tax. Trust me, you won't even notice it for{" "}
          <strong>they are the highest grossing</strong> & there will be no
          gift, property, income, large item sales (unnessesary friction,
          "illiquidity"). If communities want to Tax their businesses that's
          their perogative. To begin to make local governments answer to their
          communities, our other business facilitates budget debate for
          municipalities in thumbprint.us (soon) & sales Tax autonomy in protest
          for consumer's location in vau.money (soon)
          <br />
          <br />
          1. Finance by consumer purchase investment is a dead-weight loss and
          it is exhibited in insurance or invoices, removed from
          traditionally-natural price elasticity, the negotiation between
          historical cost:utility (contribution) of the means of exchange and
          the utility:cost as a matter of desire to make a trade.
          <br />
          2. Providing a service or good before the customer has paid is not
          only risky for you but harmful for everyone at buying the market bid.
          <br />
          3. Investing in royalty with max-profit can be customized to priotity
          return, by debt it is not only risky for the investor but harmful for
          everyone at buying at the market bid.
          <br />
          4. We would ban prosecution for invoices for services unpaid after
          July 4th, 2020, or otherwise 3 months in advance of a public notice to
          ration according to reality
          <div
            onClick={
              this.state.glad
                ? () => this.setState({ glad: false })
                : () => this.setState({ glad: true })
            }
            style={
              this.state.alsoed
                ? { color: "grey", cursor: "pointer" }
                : { display: "none" }
            }
          >
            Only malfeasance if there is an alternative
          </div>
          <br />
        </div>
        <br />
        Consumer Financial Protection Bureau complaint #200526-5065816
        <br />
        Filed for Nicholas Matthew Carducci on Mon, May 26, 9:00 AM 2020
        <br />
        <br />
        After our review, it appears we can't assist with the issue you
        described because we do not administer local, state, or other federal
        agency programs.
        <br />
        Same!
        <div id="t1262209560812683266" />
        <br />
        We [print-it digitally, the ability to create money digitally]
        <br />
        by buying treasury bills... or bonds... or other government-
        <br />
        guaranteed securities which increases the money supply
        <br />
        We also distribute *actual* currency through the federal reserve bank
        <br />
        Chairman Powell, May 2020
        <br />
        *actual* currency being share of net value of the fed? hrmmm..
        <br /> they allowed debt contracts to be made under the notion that
        <br />
        there would be enough money to complete the contract.
        <br />
        <br />
        {/*<div id="t1269791030343282688" />*/}
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ censorship: !this.state.censorship });
          }}
        >
          <h3>censorship</h3>
        </button>
        <br />
        <div
          style={{
            zIndex: this.state.censorship ? "0" : "-9999",
            position: this.state.censorship ? "relative" : "fixed",
            width: "100%"
          }}
        >
          <a
            style={{
              width: "100%",
              position: "relative"
            }}
            href="https://twitter.com/saverparty"
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/bgzlmx15ozereze/Screen%20Shot%202021-03-08%20at%2010.52.36%20AM.png?dl=0"
            />
          </a>
          <br />
          <a href="https://micro-theory.com">fact-checkers</a>
          {space}are{space}
          <a href="https://billbiden.org">hateful</a>
          <br />
          <a
            style={{
              width: "100%",
              position: "relative"
            }}
            href="https://micro-theory.com"
          >
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src="https://www.dl.dropboxusercontent.com/s/8xrttviacyav71z/Screen%20Shot%202021-03-19%20at%205.57.16%20PM.png?dl=0"
            />
          </a>
        </div>
        <i
          style={{
            fontFamily: '"Pacifico", cursive',
            textEmphasis: "italics"
          }}
        >
          That's a lot of gavagoul,{" "}
          <a href="https://micro-theory.com">
            what are the aspects of a market
          </a>
          ?
        </i>
        <br />
        <a href="https://vianickcarducci.medium.com/gdp-the-big-lie-b1a0868785f4">
          currency component of m1
        </a>
        , <a href="https://nationalsecuritycasino.com">national security</a> is
        a <a href="https://saverparty.xyz">warring position</a>
        <br />
        <br />
        Bob Menendez claims in his{" "}
        <a href="https://www.researchgate.net/publication/346041766_The_FTC_has_responded_to_my_complaints_and_so_has_the_industry_Allstate_Progressive_Geico_all_say_they_save_you_money_by_switching_or_bundling_yet_neo-insurance_companies_like_CarShieldUSA_still_says_">
          plea for the stimulus
        </a>{" "}
        is to let people keep their homes and apartments. Ban rent above 5 units
        instead. They are taking opportunity by competitng with consumers
        <br />
        <a href="https://www.energy.gov/lpo/title-xvii/title-xvii-faqs">
          Without debt, the rich will want to kill us
        </a>
        <div
          style={{
            width: "100%",
            flexWrap: "wrap",
            display: "flex"
          }} /**scrollTop onmount adopted when tight like this? */
        >
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/y4yhdgkjhcb8zyl/Mask1.png?dl=0"
            }
            float={null}
            title={
              "mold forms in mask; it wouldn't be out of pattern for " +
              "governments historically to send thru food distributions to no-mandate to paint results"
            }
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/dsre6z0rgc032bp/Mask2.png?dl=0"
            }
            float={null}
            title={
              `Earlene Brown says, "The people who believe this virus is real and want to see it gone will continue` +
              ` to wear masks. I don't live there but care enough about myself and others that I would still wear mine.` +
              ` I say, "you don't believe you breathe out moisture?"`
            }
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/kdq5qf2slsw7kek/Mask3.png?dl=0"
            }
            float={null}
            title={
              `Alan J Meunier says, "Only if you don't wash it for several months."` +
              ` I say, "Imediately, heat breathe out you can see it rise because it crystallizes and is hotter than air... heat rises."`
            }
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/qa8tm7uly5to71k/Mask4.png?dl=0"
            }
            float={null}
            title={
              `Alan J Meunier replaces Jesus witgh Einstein in his cover photo hahaha."` +
              ` Energy does not equal mass times light spoeed times light speed.  Energy is ` +
              `electrons, no linear multiplication can be used in calculus unless you are making ` +
              `a relative ration study, for that reason we do not add variables together - nor do we ` +
              `add variables together nor multiply non-solvable [soluable] things to make any ` +
              `[fact-based] scale, among other unobserved variables.  Like m1v1===m2v2===GDP===C+I+G+NE+P` +
              ` is a farce, magnate.company is going to make Einstein a laughing stock for assuming e=mc2 ` +
              `merely because we have 3 dimensions/axis bahahahahaha`
            }
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/7s8n5k0dyhw63ep/Mask5.png?dl=0"
            }
            float={null}
            title="Alan J Meunier 's source"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/306bf6rgivvm2oo/Mask6.jpeg?dl=0"
            }
            float={null}
            title={
              `I studied government history, and weather systems/planetary science ` +
              `[at JHU in response to a contender bringing that up from my profile] ` +
              `relevant to this, among other things.  Our division found they [governments] ` +
              `thru and throughout history.  Heat rises and thus spittle cannot remain in the middle of the room`
            }
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={this.props.scrollTop}
          />
        </div>
        <a href="https://vaults.biz/moldmask">heat rises</a>
        <br />
        <br />
        <div className={this.state.openForm ? "formbkgd" : "formbkgdclsd"}>
          <div
            onClick={() => {
              this.setState({ openForm: false, scrolled: false });
            }}
            style={{
              color: "white",
              position: "fixed",
              right: "33px",
              top: "18px",
              fontSize: "25px",
              cursor: "pointer"
            }}
          >
            &times;
          </div>
          <ReactContactForm
            to="nmcarducci@gmail.com"
            titlePlaceholder="Topic"
            contentsPlaceholder="Body"
            className="emailform"
          />
          <div
            style={{
              position: "relative",
              top: "70px",
              color: "rgb(200,200,250)"
            }}
          >
            nick@vaults.biz
          </div>
        </div>
        <br />
        <button
          onClick={(e) => {
            e.stopPropagation();
            this.setState({ wwii: !this.state.wwii });
          }}
        >
          <h3>wwii</h3>
        </button>
        <br />
        <div
          style={{
            overflow: "hidden",
            zIndex: this.state.wwii ? "0" : "-9999",
            position: this.state.wwii ? "relative" : "fixed",
            width: "100%"
          }}
        >
          financial crimes was public opinion, not brunettes that's crazy;
          unlike Jewish financial jihad cited in the Halakha, though financial
          crashes is from any morsel of valuation respecting debt penalties as
          potential payout when someone else owns it, not just interest
          <br />
          <div style={{ width: "100%", flexWrap: "wrap" }}>
            <Cable
              style={{ height: "440px", width: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/r58imis3omj3c1k/Screen%20Shot%202021-01-14%20at%209.41.55%20PM.png?dl=0"
              }
              float="left"
              title="finance was public opinion not hair color"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
            />
            <Cable
              style={{ height: "440px", width: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/u72ru0ni4xobc6p/Screen%20Shot%202021-01-14%20at%209.42.07%20PM.png?dl=0"
              }
              float="left"
              title="e=mc^2 is wrong"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
            />
            <Cable
              style={{ height: "440px", width: "auto" }}
              onError={handleScollImgError}
              //img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/nKvUf7F4Xn4"
              }
              float="left"
              title="Dick Morris and 'the French Rovolution'"
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
            />
            <a href="https://froth.app/debt"> https://froth.app/debt</a>
            <br />
            <br />
            <Cable
              style={{ height: "440px", width: "auto" }}
              onError={handleScollImgError}
              img={true}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/gq7be728ego5ct6/Screen%20Shot%202021-03-03%20at%209.18.59%20AM.png?dl=0"
              }
              float="left"
              title=""
              scrolling={this.props.scrolling}
              fwd={this.props["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
              scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
            />
          </div>
          Did G-d/first-abolitionist lawyer choose slaves as a political
          strategy?
          <br />
          Thank G-d. because comparative advantage tech advancement logic is
          beyond common sense
          <br />
          <br />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nogoogledrive
                ? ""
                : "https://drive.google.com/file/d/1k4BGZsCT3Ph57BHmonDwGGVsrc1cStdb/preview"
            }
            float="right"
            title=""
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nogoogledrive
                ? ""
                : "https://drive.google.com/file/d/1CwjMUiTgu6omixD4o52SKmOtjM88tpgY/preview"
            }
            float="left"
            title=""
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            //img={true}
            src={
              this.state.nogoogledrive
                ? ""
                : "https://drive.google.com/file/d/1hWM__EO-ZcRiXkMW3JeYqesqi8fbhfpa/preview"
            }
            float="right"
            title=""
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          “How do you get telehealth and telemedicine to the… that is what the
          infrastructure build back better bill is all about”
          <br />
          False bid pools and closed source licensure isn’t ‘getting’
          <br />
          Stacking nanny care hours non-concurrentable is collective bargaining
          fraud, new jobs without customers is merely busy-work
          <br />
          Universal-pre-k is trade secrets gentrification Tax cuts for the
          middle class allows the upper class to not work thru 40-50% fed-state
          debt-spending
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/xfz61waq7shmttm/Screen%20Shot%202021-02-24%20at%202.08.35%20PM.png?dl=0"
            }
            float="left"
            title="intent to team with Twitter to ban civil rights activists? I don't know who TopHatRod is"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/r7z4sngevnt86is/Screen%20Shot%202021-02-24%20at%202.08.58%20PM.png?dl=0"
            }
            float="right"
            title="stay on, after certified threat"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          <Cable
            style={{ width: "min-content", height: "140px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/m6gdg63it9s92ie/Screen%20Shot%202021-02-24%20at%201.58.55%20PM.png?dl=0"
            }
            float="left"
            title="liberty fraud, the response that I reported and Twitter certified as threat but allow him to keep account"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          <Cable
            style={{ width: "min-content", height: "200px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/52gxbd863g7tot3/Screen%20Shot%202021-02-24%20at%202.18.20%20PM.png?dl=0"
            }
            float="right"
            title="Twitter certified as threat"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          I can remake twitter wireframe and color for use case, that is
          retarded and for what I called Jack that on November 4th, 2020, after
          censoring my election commentary, being a well-atuned poll-analyst and
          entrepreneur and time-series statistician (econometrics, epiology,
          market history and propoganda at JHU by political science major and
          economics minor, for thinking price * hour gdp square is the very
          upsidedown of productivity, hours doubling home value last trade every
          5 years)
          <br />
          <br />
          conversation with this military member who claims can afford $40k
          binoculars against dollar-shareholder rights counterfeited by
          borrowers, to which he benefits. He threatended me with violence and
          Twitter keeps him on and boots me for this
          <br />
          <br />
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/4nmqqjh00vyl3b0/Screen%20Shot%202021-02-24%20at%202.02.53%20PM.png?dl=0"
            }
            float="right"
            title="fully-capable, self-harmer after complaining about misinformation about election being called at 61% on Election Day in NJ, causing voter supression"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
          I think Jack Dorsey wants to keep dollar-splitting to keep
          assets/equity/profit-share from people and keep his stock relatively
          higher in price
          <br />
          Unfortunately, I did not screencap what drove me to tweet that,
          against my memory and habit... impression count of 0... very easy to
          do as owner of a platform and now the impression count is average to
          what it was from my 580+ followers (100). I was very upset, thinking
          about all the people not able to weigh the consequences of their vote
          due to leftist misinformation, like they try to ignore{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17542834/">this</a> clinical
          study today about the usefulness of masks and ignore the harm caused
          by moisture (mold) and preventing them from not sneezing into their
          face. The left hasn't learned physics, that kinetic motion{" "}
          <a href="https://www.politifact.com/factchecks/2020/jun/15/facebook-posts/claim-n95-masks-cant-stop-covid-19-particles-due-s/">
            requires a sneeze
          </a>{" "}
          or cough velocity, or that heat rises and therefore spittle cannot
          possibly stay in the middle of the room
          <Cable
            style={{ height: "440px", width: "auto" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dl.dropboxusercontent.com/s/x853k4en40bjf0r/Screen%20Shot%202021-02-24%20at%202.33.11%20PM.png?dl=0"
            }
            float="left"
            title="listed statistical complaints about election calling on Election Day before being banned by Twitter"
            scrolling={this.props.scrolling}
            fwd={this.props["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
            scrollTop={!this.state.wwii ? 0 : this.props.scrollTop}
          />
        </div>
        <br />
        <div style={{ width: "80%" }}>
          Thank you for reading. You may ask yourself, "Why do I care?" The
          lending/insurance-pool ponzi is front-running yourself. @icedTea if
          you know me, I don't like self-harm, but maybe that's just everyone
          but the rapping insurance salesman. pls try brokering gift
          certificates... any voluntary gaffe made under duress is not voluntary
          at all..
        </div>
        <br />
        <br />
        <a
          href="https://Micro-Theory.com"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(230,230,230)",
            color: "rgb(20,20,20)"
          }}
        >
          Micro-Theory.com
        </a>
        <a
          href="https://Micro-Theory.com"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(230,230,230)",
            color: "rgb(20,20,20)"
          }}
        >
          saverparty.xyz
        </a>
        <a
          href="https://Micro-Theory.com"
          style={{
            fontSize: "30px",
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "76px",
            backgroundColor: "rgb(218, 198, 90)",
            color: "rgb(20,20,20)"
          }}
        >
          2052.live
        </a>
        QE is the purchase of bonds, or m2, outstanding, as if they were
        checking, rather than $88t value of last traded price ($170t market cap,
        collateral-appraised by{space}
        <a href="https://www.yardeni.com/pub/valcapsales.pdf">itself</a>
        ). New bonds from 40% debt spending federally $4t/yr 2010–2020, and 2/3
        of the rest being private,{space}
        <a href="https://fred.stlouisfed.org/graph/?g=K4YC">produces</a>
        {space} $12k/year/p debt, $3k/year/p m2, $64/year/p new
        CurrencyComponentOfM1 checking. Would be nice for the people on the
        inside to follow and expand upon this, and how there is only $2t
        CurrencyComponentOfM1 {space}
        <a href="https://fred.stlouisfed.org/graph/?g=K4YV">checking</a>
        {space}(3/2020).
        <br />
        The malfeasance over implausible deniability of third party donee
        beneficiary claimable surrendered freedom, repo-cycle kept down
        payments. As money is depositary for fractional and depository for
        transaction-monthly-or-deposit-fee based (as opposed to lending beyond
        actual investment as a partner waiting consumers not compounding third
        party donee beneficiary claimable surrendered freedoms (EULA),
        implausible landlord use beyond 30 days or 5 units instead of price, and
        expiring claims to contract non-compete mechanic, doctor and other
        intermediate-labor hours, are also mechanisms to make v2 - (
        <a href="https://fred.stlouisfed.org/graph/?g=KalW">GDP</a>
        {space}/(m2 - CurrencyComponentOfM1))/year === 1.1*CurrencyComponentOfM1
        === GDP/year.
        <br />
        Really busy,” the lender work deficit says, “aoww.”
        <h2>
          Free Rider mutable Tax bond laundering incarceration profit net loss
          makes the cops a net loss, their arrests racketeering and moot,
          non-white-collar fraud attention, to boot
        </h2>
        <h3>
          ween the republicans off of nationalized bridge tolls/broadband
          network fees and hypocrisy over unions, immigration and other barriers
          to entry like finance and closed-source-licensing
        </h3>
        <Cable
          style={{ width: "100%", height: "400px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyoutube
              ? ""
              : "https://drive.google.com/file/d/1GUSbT4kKoryQ6qn4HpNZ0Iir-7Z9l3aS/preview"
          }
          float="left"
          title="John Bachmann Now (Newsmax) - Christmas eve with net loss bond profit shills"
          scrolling={this.props.scrolling}
          fwd={this.props["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.props.scrollTop + window.innerHeight}
          scrollTop={this.props.scrollTop}
        />
        "Cops have to stop crime, homeless from trains, robocops $94k/yr, blamed
        as the bad guy,” only answer is to{space}
        <a href="https://qr.ae/pGzOkx">(cash/debt)*income every year back</a>,
        Truncated sales Tax sewage police lawsuits, cap rent at{space}
        <a href="https://twitter.com/frothanalysis/status/1428312309685002241">
          5 units or 30 days
        </a>
        , not price.
        <br />
        <br />
        "Investing in Free Rider Immutable cops with federal, 'resources,'"
        makes it pure, useless price inelasticity. make capacity from those
        arrests, as customers, exclusively to remove conflict of interest.
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => (
  <Arcs {...props} {...ref.current} />
));
