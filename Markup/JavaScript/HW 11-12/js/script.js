
$(function() {

	var html = $('#test').html();
	var articles = [
	{
		title:  "Simon's Cat",
		content: "Simon's Cat is an animated cartoon and book series by the British animator Simon Tofield featuring a hungry house cat who uses increasingly heavy-handed tactics to get his owner to feed him. The titular character. His antics, often in the quest for food, vex his owner Simon. He loves cat food, but also enjoys birds, mice, and fish out of Simon's koi pond. A significant amount of the humour in the book comes from his efforts to capture birds, mice, and fish. Simon's cat has not been officially named, though writer Simon Tofield says that Simon's cat is based on his own cat, Hugh."		
	},
	{
        title: "Garfield",
		content: "Garfield is an American comic strip created by Jim Davis. Published since 1978, it chronicles the life of the title character, the cat Garfield, Jon, his owner, and Jon's dog, Odie. As of 2013, it was syndicated in roughly 2,580 newspapers and journals, and held the Guinness World Record for being the world's most widely syndicated comic strip. Though this is rarely mentioned in print, Garfield is set in Muncie, Indiana, the home of Jim Davis, according to the television special Happy Birthday, Garfield. Common themes in the strip include Garfield's laziness, obsessive eating, and disdain of Mondays and diets. The strip's focus is mostly on the interactions among Garfield, Jon, and Odie, but recurring minor characters appear as well. Originally created with the intentions to come up with a good, marketable character Garfield has spawned merchandise earning $750 million to $1 billion annually. In addition to the various merchandise and commercial tie-ins, the strip has spawned several animated television specials, two animated television series, two theatrical feature-length live-action/CGI animated films and three fully CGI animated direct-to-video movies. Part of the strip's broad appeal is due to its lack of social or political commentary; though this was Davis's original intention, he also admitted that his grasp of politics isn't strong, remarking that, for many years, he thought OPEC was a denture adhesive."
	},
	{
        title: "Tom",
		content: "Tom (named Jasper in his debut appearance) is a grey and white domestic shorthair cat. (Tom is a generic name for a male cat – the Warner Bros. cartoon character Sylvester was originally named Thomas). He is usually but not always, portrayed as living a comfortable, or even pampered life, while Jerry (named Jinx in his debut appearance) is a small, brown, house mouse who always lives in close proximity to Tom. Despite being very energetic, determined and much larger, Tom is no match for Jerry brains and wits. Jerry also possesses surprising strength for his size, approximately the equivalent of Tom, lifting items such as anvils with relative ease and withstanding considerable impacts. Although cats typically chase mice to consume them, it is quite rare for Tom to actually try to consume Jerry. Most of his attempts are just to torment or humiliate Jerry, sometimes in revenge, and sometimes to obtain a reward from a human for catching Jerry. By the final fade-out of each cartoon, Jerry usually emerges triumphant, while Tom is shown as the loser."
	}
	];

	var content = tmpl(html,{
		data: articles
	});

	$('body').append(content);
});