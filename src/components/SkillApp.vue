<template>
	<div class="section section--skills">
		<div class="inner">
			<h1 class="section-title">skill</h1>
			<ul class="skills-wrap">
				<li class="skill-item" v-for="(skill, idx) in skills" :key="skill.skillId">
					<div>
						<div class="skill-name-wrap">
							<img :src="skill.skillImgPath" :alt="skill.skillName" width="50" height="50" />
							<p class="skill-name">{{ skill.skillName }}</p>
						</div>
						<div class="circle-progress-wrap">
							<svg class="circle-progress" width="140" height="140" viewBox="0 0 140 140">
								<circle class="frame" cx="70" cy="70" :r="progressRadius" stroke-width="12" />
								<circle
									class="bar"
									cx="70"
									cy="70"
									:r="progressRadius"
									stroke-width="12"
									:style="{
										'stroke-dasharray': calculateDasharray(),
										'stroke-dashoffset': calculateDashoffset(skill.skillPer),
										stroke: progressColorList[idx],
									}"
								/>
							</svg>
							<strong class="value">{{ skill.skillPer }}%</strong>
						</div>
					</div>
					<div>{{ skill.skillDescription }}</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "SkillApp",
	data() {
		return {
			progressRadius: 60,
			progressColorList: ["#ccbae2", "#f0a9a7", "#d9bbc7", "#b1cfeb", "#a9d6a3", "#e1c2c0", "#d8cab0", "#d5adcf"],
			skills: [
				{
					skillId: 1,
					skillPer: 80,
					skillName: "HTML5",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "마크업 구조를 시맨틱하게 설계 가능",
				},
				{
					skillId: 2,
					skillPer: 50,
					skillName: "CSS",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 3,
					skillPer: 80,
					skillName: "JavaScript + JQuery",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 4,
					skillPer: 20,
					skillName: "TypeScript",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 5,
					skillPer: 50,
					skillName: "MySQL",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 6,
					skillPer: 70,
					skillName: "Spring + SpringBoot",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 7,
					skillPer: 70,
					skillName: "VueJS",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
				{
					skillId: 8,
					skillPer: 10,
					skillName: "ReactJS",
					skillImgPath: require("@/assets/img/logo.png"),
					skillDescription: "",
				},
			],
		}
	},
	methods: {
		calculateDasharray() {
			let CIRCUMFERENCE = 2 * Math.PI * this.progressRadius
			return CIRCUMFERENCE
		},
		calculateDashoffset(per) {
			let CIRCUMFERENCE = 2 * Math.PI * this.progressRadius
			return CIRCUMFERENCE * (1 - per / 100)
		},
	},
}
</script>
<style scoped>
.skills-wrap {
	margin: 0 10px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 180px);
	gap: 20px;
}
.skills-wrap::-webkit-scrollbar {
	display: block;
	width: 10px;
	height: 0px;
}
.skills-wrap::-webkit-scrollbar-thumb {
	background-color: rgba(139, 139, 139, 0.3);
	border-radius: 5px;
	background-clip: padding-box;
	border: 2px solid transparent;
}
.skills-wrap::-webkit-scrollbar-thumb:hover {
	background-color: rgba(139, 139, 139, 0.7);
}
.skills-wrap::-webkit-scrollbar-track {
	background: rgba(255, 255, 255, 0.7);
}
.skill-item > div {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
}
.skill-name-wrap {
	width: 100px;
}
.circle-progress-wrap {
	position: relative;
	width: 140px;
	height: 140px;
	margin: 0 0 0 10px;
}
.circle-progress {
	transform: rotate(-90deg);
}
.frame,
.bar {
	fill: none;
}
.frame {
	stroke: #e6e6e6;
}
.bar {
	stroke: #03c75a;
	stroke-linecap: round;
}
.value {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	text-align: center;
	color: #888;
	font-size: 16px;
	line-height: 140px;
}
@media all and (max-width: 1080px) {
	.skills-wrap {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media all and (max-width: 815px) {
	.skills-wrap {
		grid-template-columns: repeat(2, 1fr);
		max-height: 600px;
		overflow-y: scroll;
	}
}
@media all and (max-width: 550px) {
	.section--skills {
		padding-top: 0;
		position: relative;
	}
	.section--skills .section-title {
		position: sticky;
		top: 0;
		background: white;
		z-index: 10;
		padding-top: 30px;
		padding-bottom: 10px;
		box-sizing: border-box;
		box-shadow: 0px 5px 5px #fff;
	}
	.skills-wrap {
		grid-template-columns: repeat(1, 1fr);
		max-height: 400px;
		overflow-y: scroll;
	}
}
</style>
