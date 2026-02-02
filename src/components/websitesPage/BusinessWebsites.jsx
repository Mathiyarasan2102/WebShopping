import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebsiteData } from "../../redux/slices/websiteSlice";
import WebsitesLayout from "./WebsitesLayout";

export default function BusinessWebsites() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((s) => s.websites);

  useEffect(() => {
    dispatch(fetchWebsiteData("business"));
  }, [dispatch]);

  if (loading || !data) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <WebsitesLayout
      title={data.title}
      description={data.description}
      bannerImg={data.banner}
      learningData={data.learningPlatforms}
      newDesignData={data.newDesignWebsites}
      ecommerceData={data.ecommerceProducts}
    />
  );
}
