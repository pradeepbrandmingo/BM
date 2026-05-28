import Blog from "../models/Blog.js";
// import Lead from "../models/Lead.js";

export const getDashboardStats = async (req, res) => {
  try {
    // BLOGS
    const totalBlogs = await Blog.countDocuments();

    const publishedBlogs = await Blog.countDocuments({
      status: "published",
    });

    const draftBlogs = await Blog.countDocuments({
      status: "draft",
    });

    // TOTAL VIEWS
    const viewsData = await Blog.aggregate([
      {
        $group: {
          _id: null,
          totalViews: { $sum: "$views" },
        },
      },
    ]);

    const totalViews = viewsData[0]?.totalViews || 0;

    // RECENT BLOGS
    const recentBlogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title slug status views createdAt");

    // LEADS
    // const totalLeads = await Lead.countDocuments();
    const totalLeads = 312;

    // CATEGORY BREAKDOWN
    const categoryStats = await Blog.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json({
      success: true,

      stats: {
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        totalViews,
        totalLeads,
      },

      recentBlogs,

      categoryStats,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Dashboard fetch failed",
    });
  }
};
