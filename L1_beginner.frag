void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;
    
    uv -= .5;

    uv.x *= iResolution.x/iResolution.y;
    
    float d = length(uv);
    float r = 0.3;
    
    
    
    float c = smoothstep(r,r-0.01,d);
    
    //if(d<.3) c=1. ; else c=0. ;
    
    fragColor=vec4(vec3(c), 1.);

}
    
