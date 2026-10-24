import{r as B,t as ne,j as X}from"./index-B_WvA-eF.js";import{M as ue,O as Ne,B as V,F as Z,S as z,U as ee,V as S,W as $,H as q,N as De,T as Ue,C as D,a as I,A as Le,b as Ie,R as Oe,c as ze,d as Ge,L as ke,e as Qe,f as Ve,g as Ee,h as He,i as We,j as je,k as Xe,l as Ye,m as Ke,P as $e,n as qe,D as Je,G as Ze,o as et,p as Y,q as le,r as tt,s as st,t as it}from"./three.module-BQJll1LZ.js";import"./react-D-vXKkXw.js";import"./math-BvXWHf-j.js";const J={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class k{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rt=new Ne(-1,1,1,-1,0,1);class at extends V{constructor(){super(),this.setAttribute("position",new Z([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Z([0,2,0,0,2,0],2))}}const ot=new at;class fe{constructor(e){this._mesh=new ue(ot,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nt extends k{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof z?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ee.clone(e.uniforms),this.material=new z({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fe(this.material)}render(e,s,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ae extends k{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,r){const o=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let a,u;this.inverse?(a=0,u=1):(a=1,u=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),t.buffers.stencil.setFunc(o.ALWAYS,a,4294967295),t.buffers.stencil.setClear(u),t.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.color.setMask(!0),t.buffers.depth.setMask(!0),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(o.EQUAL,1,4294967295),t.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),t.buffers.stencil.setLocked(!0)}}class lt extends k{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ut{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const r=e.getSize(new S);this._width=r.width,this._height=r.height,s=new $(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:q}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nt(J),this.copyPass.material.blending=De,this.timer=new Ue}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const s=this.renderer.getRenderTarget();let r=!1;for(let o=0,t=this.passes.length;o<t;o++){const a=this.passes[o];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const u=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Ae!==void 0&&(a instanceof Ae?r=!0:a instanceof lt&&(r=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new S);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ht extends k{constructor(e,s,r=null,o=null,t=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=t,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new D}render(e,s,r){const o=e.autoClear;e.autoClear=!1;let t,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(t=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(t),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=o}}const ft={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new D(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class G extends k{constructor(e,s=1,r,o){super(),this.strength=s,this.radius=r,this.threshold=o,this.resolution=e!==void 0?new S(e.x,e.y):new S(256,256),this.clearColor=new D(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let t=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $(t,a,{type:q,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const p=new $(t,a,{type:q,depthBuffer:!1});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const c=new $(t,a,{type:q,depthBuffer:!1});c.texture.name="UnrealBloomPass.v"+f,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),t=Math.round(t/2),a=Math.round(a/2)}const u=ft;this.highPassUniforms=ee.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new z({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];t=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new S(1/t,1/a),t=Math.round(t/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const _=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=_,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ee.clone(J.uniforms),this.blendMaterial=new z({uniforms:this.copyUniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,premultipliedAlpha:!0,blending:Le,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new D,this._oldClearAlpha=1,this._basic=new Ie,this._fsQuad=new fe(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,s){let r=Math.round(e/2),o=Math.round(s/2);this.renderTargetBright.setSize(r,o);for(let t=0;t<this.nMips;t++)this.renderTargetsHorizontal[t].setSize(r,o),this.renderTargetsVertical[t].setSize(r,o),this.separableBlurMaterials[t].uniforms.invSize.value=new S(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(e,s,r,o,t){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),t&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[l].uniforms.direction.value=G.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=G.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,t&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const s=[],r=e/3;for(let a=0;a<e;a++)s.push(.39894*Math.exp(-.5*a*a/(r*r))/r);const o=[],t=[];for(let a=1;a<e;a+=2){const u=s[a],l=a+1<e?s[a+1]:0,_=u+l;o.push((a*u+(a+1)*l)/_),t.push(_)}return new z({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new S(.5,.5)},direction:{value:new S(.5,.5)},centerWeight:{value:s[0]},gaussianOffsets:{value:o},gaussianWeights:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new z({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}G.BlurDirectionX=new S(1,0);G.BlurDirectionY=new S(0,1);const K={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ct extends k{constructor(){super(),this.isOutputPass=!0,this.uniforms=ee.clone(K.uniforms),this.material=new Oe({name:K.name,uniforms:this.uniforms,vertexShader:K.vertexShader,fragmentShader:K.fragmentShader}),this._fsQuad=new fe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===Ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ke?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Qe?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ve?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ee?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===He?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===We?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===je&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function dt(d,e,s,r){const t={wave:[.1,1.8],torus:[.25,1.2],helix:[.1,.3]}[d];if(!t||![e,s,r].every(Number.isFinite)||e<0||e>1||s<0||s>1||r<t[0]||r>t[1])throw new RangeError("Invalid sculpture parameter");if(d==="wave"){const p=(e-.5)*2*Math.PI,c=(s-.5)*2*Math.PI;return[p,c,r*Math.sin(p)*Math.cos(c)]}if(d==="torus"){const p=e*2*Math.PI,c=s*2*Math.PI;return[(2+r*Math.cos(c))*Math.cos(p),(2+r*Math.cos(c))*Math.sin(p),r*Math.sin(c)]}const a=e*6*Math.PI,u=s*2*Math.PI,l=Math.cos(a),_=Math.sin(a),f=Math.hypot(1.65,r);return[1.65*l+.12*(Math.cos(u)*l+Math.sin(u)*r*_/f),1.65*_+.12*(Math.cos(u)*_-Math.sin(u)*r*l/f),r*(a-3*Math.PI)+.12*Math.sin(u)*1.65/f]}function he(d,e,s,r){const[o,t,a]=dt(d,e,s,r);return new I(o,a,t)}function pt(d,e,s){const o=[],t=[],a=[],u=new D("#172965"),l=new D("#229e89"),_=new D("#b8d784");for(let p=0;p<=s;p++)for(let c=0;c<=40;c++){const v=he(d,p/s,c/40,e);o.push(v.x,v.y,v.z);const y=d==="helix"?e*Math.PI*3+.12:e,w=Math.max(0,Math.min(1,(v.y/y+1)/2)),O=w<.5?u.clone().lerp(l,w*2):l.clone().lerp(_,(w-.5)*2);if(t.push(O.r,O.g,O.b),p<s&&c<40){const n=p*41+c,P=n+40+1;a.push(n,P,n+1,P,P+1,n+1)}}const f=new V;return f.setAttribute("position",new Z(o,3)),f.setAttribute("color",new Z(t,3)),f.setIndex(a),f.computeVertexNormals(),f}function Mt({mode:d,value:e,playing:s,resetKey:r}){const o=B.useRef(null),t=B.useRef(null),a=B.useRef({mode:d,value:e,playing:s}),[u,l]=B.useState(!1),[_,f]=B.useState("拖动图形旋转 · 方向键也可操作");return B.useEffect(()=>{const p=o.current;if(!p)return;const c=p;let v;try{v=new Xe({antialias:!0,alpha:!1,powerPreference:"low-power"})}catch{l(!0);return}const y=new Ye;y.background=new D("#070b10"),y.fog=new Ke("#070b10",.026);const w=new $e(35,1,.1,50),O=matchMedia("(min-width: 601px)").matches;w.position.set(8.2,6.2,8.8),w.lookAt(0,-.25,0),v.setPixelRatio(Math.min(devicePixelRatio,O?1.5:1.2)),v.toneMapping=Ee,v.toneMappingExposure=.9;const n=v.domElement;n.setAttribute("aria-label",ne("可旋转的数学曲面。拖动或用方向键改变视角，下面的滑块改变形状。")),n.setAttribute("role","img"),n.tabIndex=0,c.append(n);const P=new ut(v),ce=new ht(y,w),de=new G(new S(1,1),.1,.5,1.6),pe=new ct;P.addPass(ce),P.addPass(de),P.addPass(pe),y.add(new qe("#d8f7f2","#18224a",.55));for(const[i,h,M,C,x]of[["#bdfcee",1.8,2,6,4],["#7374ff",2,-4,2,-5],["#f8e8ae",1.2,5,1,-1]]){const g=new Je(i,h);g.position.set(M,C,x),y.add(g)}const m=new Ze;m.rotation.y=-.3,y.add(m);const U=new et(16,40,"#254147","#14242b");U.position.y=-2.4,U.material.transparent=!0,U.material.opacity=.36,y.add(U);const Re=Array.from({length:161},(i,h)=>new I(4.2*Math.cos(h/160*Math.PI*2),-2.35,4.2*Math.sin(h/160*Math.PI*2))),H=new Y(new V().setFromPoints(Re),new le({color:"#56726b",transparent:!0,opacity:.3}));y.add(H);let F,W=a.current.playing,Q=!0,te=!1,A=0,se=0,T=!0,N=-.3,E=0,me=0,b=null;const ge=new it,ve=new S;function be(){for(const i of[...m.children])m.remove(i),(i instanceof ue||i instanceof Y)&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(h=>h.dispose()))}function R(){!A&&!te&&Q&&!document.hidden&&(A=requestAnimationFrame(Fe))}function Me(i,h){const M=F&&n.dataset.sculpture!==i&&!matchMedia("(prefers-reduced-motion: reduce)").matches?new Float32Array(F.geometry.getAttribute("position").array):null;be(),F=new ue(pt(i,h,O?90:64),new tt({color:"#ffffff",vertexColors:!0,side:st,metalness:.28,roughness:.4,clearcoat:.8,clearcoatRoughness:.2,iridescence:.3,iridescenceIOR:1.35,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),m.add(F);const C=F.geometry.getAttribute("position");if(b=M&&M.length===C.array.length?{start:M,end:new Float32Array(C.array),began:performance.now()}:null,n.dataset.transition=String(!!b),b&&(C.array.set(b.start),C.needsUpdate=!0,F.geometry.computeVertexNormals()),U.position.y=i==="helix"?-3.15:-2.4,H.position.y=i==="helix"?-.8:0,i!=="helix"){for(let x=0;x<=26;x++){const g=Array.from({length:101},(Be,oe)=>he(i,oe/100,x/26,h)),L=new Y(new V().setFromPoints(g),new le({color:"#dcffe8",transparent:!0,opacity:.32,depthWrite:!1}));L.scale.multiplyScalar(1.001),L.visible=!b,m.add(L)}for(let x=0;x<=16;x++){const g=Array.from({length:101},(Be,oe)=>he(i,x/16,oe/100,h)),L=new Y(new V().setFromPoints(g),new le({color:"#a5cec8",transparent:!0,opacity:.15,depthWrite:!1}));L.scale.multiplyScalar(1.001),L.visible=!b,m.add(L)}}n.dataset.sculpture=i,n.dataset.parameter=String(h),f("拖动图形旋转 · 方向键也可操作"),T=!0,R()}function Fe(i){if(A=0,te||!Q||document.hidden)return;if(i-se<32){R();return}const h=Math.min((i-se)/1e3,.05);if(se=i,W&&(N+=h*.055,T=!0),(Math.abs(m.rotation.y-N)>.001||Math.abs(m.rotation.x-E)>.001)&&(m.rotation.y+=(N-m.rotation.y)*.08,m.rotation.x+=(E-m.rotation.x)*.08,T=!0),b){const M=Math.min(1,(i-b.began)/760),C=M*M*(3-2*M),x=F.geometry.getAttribute("position");for(let g=0;g<x.array.length;g++)x.array[g]=b.start[g]+(b.end[g]-b.start[g])*C;x.needsUpdate=!0,F.geometry.computeVertexNormals(),T=!0,M===1&&(b=null,n.dataset.transition="false",m.children.forEach(g=>{g.visible=!0}))}T&&(P.render(),T=!1,n.dataset.rendered="true",n.dataset.frame=String(Number(n.dataset.frame||0)+1)),(b||W||Math.abs(m.rotation.y-N)>.001||Math.abs(m.rotation.x-E)>.001)&&R()}t.current={rebuild:Me,motion:i=>{W=i,n.dataset.motion=String(i),R()},reset:()=>{N=-.3,E=0,T=!0,R()}};function xe(){const i=c.clientWidth,h=c.clientHeight;!i||!h||(w.aspect=i/h,w.position.set(i/h<1.1?10:8.2,i/h<1.1?8:6.2,i/h<1.1?11:8.8),w.lookAt(0,-.25,0),w.updateProjectionMatrix(),v.setSize(i,h),P.setSize(i,h),T=!0,R())}const _e=new ResizeObserver(xe);_e.observe(c);const we=new IntersectionObserver(([i])=>{Q=i.isIntersecting,Q?(T=!0,R()):(cancelAnimationFrame(A),A=0)},{threshold:0});we.observe(c);const Te=()=>{document.hidden?(cancelAnimationFrame(A),A=0):(T=!0,R())};document.addEventListener("visibilitychange",Te);let ie=!1,re=0,ae=0;const Ce=i=>{ie=!0,re=i.clientX,ae=i.clientY,n.setPointerCapture(i.pointerId)},Se=i=>{if(ie){N+=(i.clientX-re)*.007,E=Math.max(-.7,Math.min(.7,E+(i.clientY-ae)*.004)),re=i.clientX,ae=i.clientY,T=!0,R();return}if(performance.now()-me<120)return;me=performance.now();const h=n.getBoundingClientRect();ve.set((i.clientX-h.left)/h.width*2-1,-(i.clientY-h.top)/h.height*2+1),ge.setFromCamera(ve,w);const M=ge.intersectObject(F)[0];if(M){const C=m.worldToLocal(M.point.clone());f(`x ${C.x.toFixed(2)}  ·  y ${C.z.toFixed(2)}  ·  z ${C.y.toFixed(2)}`)}},j=()=>{ie=!1},ye=i=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(i.key)&&(i.preventDefault(),i.key==="ArrowLeft"&&(N-=.15),i.key==="ArrowRight"&&(N+=.15),i.key==="ArrowUp"&&(E=Math.max(-.7,E-.1)),i.key==="ArrowDown"&&(E=Math.min(.7,E+.1)),T=!0,R())},Pe=i=>{i.preventDefault(),l(!0),cancelAnimationFrame(A),A=0,Q=!1};return n.addEventListener("pointerdown",Ce),n.addEventListener("pointermove",Se),n.addEventListener("pointerup",j),n.addEventListener("pointercancel",j),n.addEventListener("keydown",ye),n.addEventListener("webglcontextlost",Pe),Me(a.current.mode,a.current.value),xe(),n.dataset.motion=String(W),()=>{te=!0,t.current=null,cancelAnimationFrame(A),we.disconnect(),_e.disconnect(),document.removeEventListener("visibilitychange",Te),n.removeEventListener("pointerdown",Ce),n.removeEventListener("pointermove",Se),n.removeEventListener("pointerup",j),n.removeEventListener("pointercancel",j),n.removeEventListener("keydown",ye),n.removeEventListener("webglcontextlost",Pe),be(),U.geometry.dispose(),U.material.dispose(),H.geometry.dispose(),H.material.dispose(),de.dispose(),pe.dispose(),ce.dispose(),P.dispose(),v.dispose(),v.forceContextLoss(),n.remove()}},[]),B.useEffect(()=>{t.current?.rebuild(d,e)},[d,e]),B.useEffect(()=>{t.current?.motion(s)},[s]),B.useEffect(()=>{t.current?.reset()},[r]),X.jsxs("div",{className:"math-sculpture",children:[X.jsx("div",{ref:o,className:"sculpture-canvas"}),u?X.jsx("p",{className:"sculpture-fallback",children:ne("此浏览器暂时无法显示三维图。下方教材仍可完整阅读。")}):X.jsx("output",{className:"sculpture-sample",children:ne(_)})]})}export{Mt as default};
