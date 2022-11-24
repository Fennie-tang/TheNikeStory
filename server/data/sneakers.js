const { v4: uuid } = require("uuid")
console.log(uuid())
const shoes = [
	{
		"_id": uuid(),
		"name": "Air Force 1",
		"year": "1982",
		"description": "It is an understatement to call this an important piece of basketball history. The modern basketball sneaker takes many cues from this on-court icon. Debuting in a leather construction with ankle protection and cushion, it is the foundation of basketball's 'Golden Era'. The Air Force 1's success continues today. Leading names in today's hip-hop scene show reverence for this model regularly. Most notably, Travis Scott brings about a breath of fresh air for this unmistakable silhouette.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirForce1.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Huarache",
		"year": "1991",
		"description": "Today, it's common to see a sneaker boast that it's “breaking things down to essentials.” Well, the first major release in this category is the Nike Air Huarache. In 1991, this is one of Tinker's grand achievements. The one-piece neoprene construction and caging come together beautifully, making this yet another coup of the early 90s runners market.It's also a running combo of some older best Nike sneakers design practices. Today, it maintains its position as a go-to even for those of us who don't count sneakers as an obsession. In fact, the Nike Air Huarache is one of the top sellers for the brand in 2018.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirHuarache.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Jordan 1",
		"year": "1985",
		"description": "In the early days of Jordan Brand, they exist under the Swoosh's umbrella. This critical model is what eventually sells Michael Jordan on staying with the brand for the foreseeable future. Fascinatingly, the man who loved the low-riding Converse Chucks is swayed into the robust midsoles of the Air Jordan 1.Beyond that, a few details make this one of the best Nike sneakers out there. As a highlight, the upper's premium OG construction sports stitch detailing and a host of color combinations in its catalog. Release after release reminds us that the love for this shoe is still strong.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirJordan1.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Jordan 3",
		"year": "1988",
		"description": "This is an easy one. Not only is it one of the best Nike sneaker sneakers of all time, it's also a mainstay on many people's lists when it comes to Jordans. From OG's in the collecting game to those of us new to the Jumpman, the Air Jordan 3 is a no-doubt hit.This shoe is the first in the entire collection that sports Tinker's inspiration. It's also the first time we see the official Jumpman logo, beginning to bring MJ's brand into its own.A tumbled leather upper comes together with eye-popping features like that elephant print mudguard to make for a distinct look. It's an easy way to get that Air Jordan collection of yours finally started!",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirJordan3.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Jordan 6",
		"year": "1991",
		"description": "This is another example of MJ taking over a sneaker design process. One of the best Nike sneakers of all time, the Air Jordan 6 brings together a few key new features. At this point, Jordan has a few problems with the AJ 5. He wants to have a clean toe section and something to help with the fit as well as protect his Achilles tendon. The Air Jordan 6 brings every one of those features to the forefront and goes even further. The technical specs almost pale in comparison to the shoe's overall look. This is partly because Tinker knows what he's doing when designing these beauties. Small details - such as calling the heel pull section a “spoiler” - show that he knows who he's dealing with. Note: Michael is a huge fan of sports cars.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirJordan6.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Jordan 11",
		"year": "1995",
		"description": "It's hard to understate the importance of the Air Jordan 11 in any context. It represents one of the many iconic moments in Michael Jordan's history, but it brings more to the table as well. The Air Jordan 11 is the first major basketball sneaker to adopt patent leather on its upper.The material is a dream come true in terms of its visual appeal. It's also a huge win because it doesn't negatively impact performance qualities either. To this day, the Air Jordan 11 is still a go-to for many professional basketball players. At the highest level of the sport, it's all over the place.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirJordan11.jpg"
	},
	{
		"_id": uuid(),
		"name": "Air Max 1",
		"year": "1987",
		"description": "The Air Max line is the historical backbone of Nike's running revolution. The brand does start off as a running experiment to kit out track athletes. This eventually grows into the design and development of recreational running shoes. Still, the Air Max line pushes that to a whole new level.The audacity of exposed Air bubbles is a concept that debuts on the Air Max 1. What also makes this one of the best Nike sneakers of the modern era is how it remains in our conscience. This runner is a favorite of both avid OG collectors and consumers of contemporary hype. Versions like the AM1 Parra, the hybrid Air Max 1 Safari, are just two of the latest highlights.",
		"category": "",
		"shoeURL": "/images/shoe-pics/AirMax1.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Flight 89",
		"year": "1989",
		"description": "For you OG heads out there, this shoe represents some bittersweet memories. Back when it originally drops, the Air Flight 89 is sort of like the Elite series of a LeBron or Durant signature: it’s just too damn expensive. This is a shoe that is regularly on the feet of on-court Superstars from its early days. It was into the three digits in terms of pricing, making it gaudy to say the very least. And yet, it’s also on the list of best Nike sneakers to retro. This is mainly because it gives those of us who can’t quite afford the hefty price tag in our youths a chance to finally cop!",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirFlight89.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Foamposite",
		"year": "1997",
		"description": "Both the Foamposite and Foamposite Pro make up the top Nike shoes in the brand's history. Like most on-court models, the features here are mostly protective or functional. The Posite on the uppers starts off as a liquid and solidifies into a cast during an incredibly detailed and expensive process. The result is a truly unique look for a shoe that resembles something from the distant future. Though notorious for their break-in time, the Nike Foams are one of the most hotly pursued items in sneaker culture. Any announcement of OG color releases usually meets fervent fans and long lines.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirFoamposite.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Mag",
		"year": "2011",
		"description": "When you talk about the future of footwear, one of the inevitable topics is the Nike Air Mag. This is, after all, one of our first glimpses into a futuristic sneaker industry that seems remotely possible.Surely that notion gets more than a little help from its movie cameo. In fact, the original version of this shoe makes for interesting news not too long ago. It goes to quite the bid at an auction, thanks in part to that cinematic history.More importantly for sneakerheads, the Mag effectively ushers in the more recent HyperAdapt.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirMag.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Max 90",
		"year": "1990",
		"description": "The Air Max 90 debuts originally under quite a bit of stress. Though the Air Max 1 is a hit, it's following drops - the Air Max 2 - bring the AM line down a bit. In that contest, the Air Max 90 has to bring up both spirits and revenue.When it debuts, it sweeps stores and sells out quickly wherever it releases. When it initially drops, it's known as the Air Max 3. It's only in 2005 that it starts to carry the name we've all come to know and love.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirMax90.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Max 97",
		"year": "1997",
		"description": "The story of the Air Max 97 is in two major parts: function and reputation. Firstly, Christian Tresser's design on this shoe is all about aerodynamics. Nike has at this point figured out what to do about the shoe's midsole. But the aerodynamics pushed the shoe's performance to a new level.It takes inspiration from Japanese silver bullet trains. It also eventually flies from store shelves just as quickly. From a reputation standpoint, it becomes one of the most popular Nike sneakers out there. Italy's love of this shoe is responsible for a major part of the story. It was there that it finds its cultural footing. It even adopts a nickname: La Silver.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirMax97.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Mowabb",
		"year": "1991",
		"description": "Any discussion of the best Nike sneakers - or best Nike anything, really - is incomplete without ACG. The All Conditions Gear line is something of an equivalent to adidas's EQT branch. And, of course, the Mowabb is the chief piece of marketing that propels this line. Back in 1991, the market for sneakers is starting to turn strongly towards running shoes. Additionally, consumers seem to be vying for the perfect trail running sneaker. Nike sees this as a need for something to wear on all running conditions.The Mowabb meets this functional demand in no small part thanks to its Huarache inspiration. Apart from the quality of the shoe itself, an accompanying outdoors-inspired ad campaign really helps it stand out.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirMowabb.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Presto",
		"year": "2000",
		"description": "One of the best Nike sneakers ever also comes with a pretty remarkable advertising campaign. “T-shirts for your feet,” is some impressive description work. The shoe itself was pretty impressive as well. One of the main design innovations here is an ankle section that was exposed along the sides. This results in a more customizable fit. As such, the shoe actually comes in sizes ranging from 3XS to XXL.  Looking at the sizing alone, it's fair to say this shoe is a game-changer.The best of the Nike Air Presto is for sure its design; it also comes in a host of colorways with great nicknames!",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirPresto.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Safari",
		"year": "1987",
		"description": "A majority of the best Nike sneakers are the result of a focus on performance. This is the concept that unites ever facet of the company, from design to marketing. In 1987, this starts to change. This is the year when the Air Safari debuts and Nike's emphasis suddenly deviates. The story behind this model reminds us of Tinker's design prowess. He comes up with the concept of a trip to NYC in, of all places, a luxury furniture shop. The Air Safari is in the rare category of top Nike shoes that have almost nothing to do with helping an athlete. Instead, it is to many people the sneaker that represents Nike's head-first dive into the world of athleisure.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirSafari.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Stab",
		"year": "1988",
		"description": "The story behind this shoe is interesting for a few reasons. First, the Air Stab suffers originally from its name choice. Retailers fear that the monicker will turn parents away from buying it as a gift for their kids. Ironically, the “Stab” stood for “Stability.” The shoe's construction includes a heel Air bag that sports some extra containment, hence the name. Regardless, it's one of the best Nike sneakers of all time and is often the victim of some underrating by all but OG collectors.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirStab.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Yeezy",
		"year": "2009",
		"description": "Though their relationship does eventually sour, Nike and Kanye West are responsible for a few remarkable releases. The signature looks the superstar rapper originally plans are a bit lackluster. But, leading up to the Yeezy 1, this all changes. In an interesting twist, this shoe is allegedly not a big hit internally. Nike executives are initially quite skeptical of the design. In their defense, it was a fairly shocking stray from footwear norms at the time.Still, iterations such as the “Red October” version of the Yeezy 2 prove that this initial disapproval is premature to say the very least.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirYeezy.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Air Zoom Generation",
		"year": "2003",
		"description": "This one is a difficult inclusion. Like few others, LeBron has a signature sneaker line-up that absolutely sets standards from model to model. From its beginnings, Nike uses this line to experiment with fitting out the most athletic player in the game's history. Yes, there are some real beasts in the LBJ catalog. But, the AZG is where it all starts. In terms of elite signature models, the AZG is akin to the Hyperdunk - except it has to try and support a speed demon with springs in his legs and 260 pounds of muscle!",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeAirZoomGeneration.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Blazer",
		"year": "1973",
		"description": "Before their efforts with the Air Force 1, the Blazer is Nike's first real go at a performance basketball sneaker. This happens in the midst of Converse's domination in this category. While greats such as Bill Russell and Wilt Chamberlain were breaking records in a pair of Chucks, Nike took a chance on basketball sneaker design. It involves basic elements: durable base uppers, minimal panel work, and rubber soles. The results eventually become too great for competing brands to keep up with. At least part of this was thanks to a gentleman we know as The Iceman.",
		"category": "Basketball",
		"shoeURL": "/images/shoe-pics/NikeBlazer.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Challenge Court",
		"year": "1990",
		"description": "Releasing in 1983, the Nike Challenge Court is a bit less impressive than one hopes. It's a pretty basic build: leather base on the upper and chunky midsole with some familiar stitch details. And yet, it's significant in its own right.This shoe boasts an unusual 3/4 cut, making it an interesting option for its sport. The Challenge Court sees its first life on tennis courts, pleasantly surprising its fair share of endorsees. Chief among those who take to the design and performance quickly is one John McEnroe.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeChallengeCourt.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Cortez",
		"year": "1972",
		"description": "The Cortez isn't immediately a candidate for one of Nike's best sneakers. It's still worth noting that its initial release sees positive reviews. This is Nike's first real attempt at sweeping through the market with an option for track runners.As solid as it is from a functional standpoint, the Nike Cortez finds itself in the wider culture-sphere only after its appearance in an equally legendary movie. Today, this sneaker stands in a conflicting spot in terms of its reputation. While still among the best Nike sneakers for many collectors, it's also a bit of a harbinger in other parts of the world.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeCortez.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Dunk SB",
		"year": "2002",
		"description": "This is one of the many examples of the power of skateboarding. The Dunk is a shoe that finds its place on the basketball court. It quickly becomes a common sight in collegiate hoops thanks to a few details. A durable leather upper and array of color combos are the primarily attractive features here.They also happen to be among the biggest reasons why this shoe is appropriated by skateboarders. Much like the Air Jordan 1's, the durable leather and solid traction make the Dunk SB a perfect candidate for this sport.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeDunkSB.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Flyknit Racer",
		"year": "2012",
		"description": "Nike's history with Flyknit is a bit muddy. The brand faces quite the struggle with adidas from just a legal standpoint. But, it all comes to their benefit as Nike's Flyknit Racer storms through the sneaker world. As a lightweight racing model, it's the perfect opportunity to debut the full capacity of this knit material. Moreover, Nike makes sure to throw pretty much every colorway possible on its base. The result is a banger of a casual option as well as performance runner. It's also another easy addition to the list of best Nike sneakers of all time.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeFlyknitRacer.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Free 5.0",
		"year": "2005",
		"description": "Nike's Free line of runners is one of the most critical introductions in the brand's history for a variety of reasons. Consider this: runners today are all about fit and stability. Cushion is important, but those two factors play a bigger role for a large number of people. The Free line is an earlier answer to a simple question: is the perfect running shoe one that feels like you have nothing on? The Nike Free 5.0 presents a potent solution. It mixes in breezy uppers with the sophistication of Flywire cables. It also sports the natural feel of a midsole that conforms to your strides. Also underfoot is the brand's first major use of the hexagonal outsole pattern.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeFree5.0.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Hyper Dunk",
		"year": "2008",
		"description": "In 2008, we see the introduction of some big tech from the crew at Nike. The first is the support system of Flywire. It brings in a much less intrusive way of keeping your foot stable as you dart in all directions.The second is Lunar foam. At this time, this is the most competent piece of cushion tech available. It's incredibly lightweight and effective on both outdoor and indoor surfaces.The OG Hyperdunk is so great that it's the official shoe of the USA Men's National Basketball Team during its dominating run in 2008. Their constant wins and TV presence bring about the best Nike sneakers organic advertising that Swoosh hoops could buy.",
		"category": "Basketball",
		"shoeURL": "/images/shoe-pics/NikeHyperDunk.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Kobe 4",
		"year": "2008",
		"description": "Nike's work with Kobe Bryant includes some memorable home runs, but the Kobe 4 really stands apart from the rest. Deep into his partnership with the brand, Bryant makes it clear in 2008 that he needs something completely new. He needs his next shoe to be light - featherweight, in fact - and it needs to be low-cut.Both of these demands reportedly stem from the Mamba's love for soccer boots. He gets his wish when this shoe drops in 2009 as the lightest basketball sneaker ever at the time.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeKobe4.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Kobe 5",
		"year": "2009",
		"description": "Remember us mentioning the Kobe 4? Well, that is just the first in many projects involving Bryant and designer Eric Avar. Though it is a mould-breaker, the Kobe 4 is a bit of a half-measure on the way to low-top sneakers.The Kobe 5, however, is the equivalent to going all in. The low-riding cushion, the low ankle support, it's all there. But, this time, the Kobe 5 debuts to the full weight of support from Nike fans and hoop-heads all over. On-court, it's an easy addition to the best Nike sneakers category.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeKobe5.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Pegasus",
		"year": "1983",
		"description": "The Pegasus line is up to its neck in incredible designs and colorways. We just can’t choose between them. Luckily, the whole Pegasus series is worth recognition. Many standard issue features for Nike runners make experimental debuts on Pegasus models.The OG releases sport durable leather on the uppers, foam midsoles, and that familiar waffle outsole. The OG 1983 Pegasus also happens to be a “go-to” for Phil Knight himself.",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikePegasus.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Waffle Racer",
		"year": "1973",
		"description": "It's far from the first thing that comes to mind on a list of the best Nike sneakers of all time. Regardless, the Waffle Racer is about as pivotal to the brand's history and progress as it gets. The story behind it is unbeatable as well. Bill Bowerman is sitting with his wife for breakfast when he notices their waffle iron as it works.In those days, he's still looking for a way to change how track athletes see their performance footwear. The waffle pattern prompts him to get off his seat and head straight into his in-house lab. Taking a urethane mix, he pours it into the waffle iron and a running revolution is born. How's that for a background?",
		"category": "",
		"shoeURL": "/images/shoe-pics/NikeWaffleRacer.jpg"
	},
	{
		"_id": uuid(),
		"name": "Nike Zoom Spiridon",
		"year": "1997",
		"description": "For a lot of us, Zoom Air on a Nike runner is nothing to gawk at. Over the years, we see the cushioning tech become a standard on Swoosh runners. But, this isn't always the case back in the day. The Spiridon is the first model to fully incorporate Zoom Air for running aficionados and newbies everywhere. It's also famous for its association with the legendary Michael Johnson. For our purposes, the Spiridon is definitely one of the more unique looks for a Nike sneaker imaginable. Thanks to some considerate design and all of that Zoom Air, it's also remarkably cozy!",
		"category": "Running",
		"shoeURL": "/images/shoe-pics/NikeZoomSpiridon.jpg"
	}
]
module.exports = shoes