using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TEN1.Pages;

public class CommunityModel : PageModel
{
    private readonly ILogger<CommunityModel> _logger;

    public CommunityModel(ILogger<CommunityModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}