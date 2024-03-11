float Circle(vec2 uv ,vec2 p ,float r ,float blur)
{
    float d = length(uv-p);
    float c = smoothstep(r,r-blur,d);
    return c;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    uv -= .5;
    
    vec3 col=vec3(0.);
    uv.x *= iResolution.x/iResolution.y;
    
    float mask=Circle(uv,vec2(0.,0.) ,.4,.05);
    
    mask -= Circle(uv,vec2(.13,.2),.07,.01);
    mask -= Circle(uv,vec2(-.13,.2),.07,.01);
    //change layer
    mask -= Circle(uv,vec2(.13,.2),.07,.01);
    mask -= Circle(uv,vec2(-.13,.2),.07,.01);
    
    float mouth = Circle(uv,vec2(0.),.25,.01);
    mouth -= Circle(uv,vec2(0.,0.05),.25,.01);
    
    
    mask -= mouth;
    
    col=vec3(1.,1.,0.)*mask;
    
    fragColor=vec4(col, 1.);

}
