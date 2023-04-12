import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<any>({
    data: {
      hashtag: {
        id: "17861982521881175",
        name: "ginidoanggampang",
        allow_following: true,
        is_following: false,
        is_top_media_only: false,
        profile_pic_url:
          "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MjY1MDI5MTEzOTg3NDYyNTU2NA%3D%3D.2.c-ccb7-5&oh=00_AfAzAsMJBcJUOqGIYzrxktbNXhjeKnX-PAlKCbeOXppqLQ&oe=643ACE49&_nc_sid=d997c6",
        edge_hashtag_to_media: {
          count: 4,
          page_info: {
            has_next_page: false,
            end_cursor: null,
          },
          edges: [
            {
              node: {
                comments_disabled: false,
                __typename: "GraphImage",
                id: "3024075590742683540",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest kopi kenangan",
                      },
                    },
                  ],
                },
                shortcode: "Cn3rLpAJa-U",
                edge_media_to_comment: {
                  count: 0,
                },
                taken_at_timestamp: 1674717924,
                dimensions: {
                  height: 1350,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MzAyNDA3NTU5MDc0MjY4MzU0MA%3D%3D.2-ccb7-5&oh=00_AfA3Fov_nEVWBeD-0apUNtjhFE7tUrbFi7XeN8BE-hMAFA&oe=643BEAD0&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 71,
                },
                edge_media_preview_like: {
                  count: 71,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MzAyNDA3NTU5MDc0MjY4MzU0MA%3D%3D.2.c-ccb7-5&oh=00_AfBGHOLdhY7bM-yT4_OwAkCtlCtY7Bkl1NOGVnwGEIeKrQ&oe=643BEAD0&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBo3-yWUV6ZwfjL6KbwWx-t2cU-FoZ8sIsnLj-sY1jXJQ&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfABF6nmvLcCnMRAV9N2qmUF9c5m3V0-9gJ3Yxl2j1wnIg&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBoYhysSVDFLJn_Xq8Bo30fLN64Cw2SoSxFp5aumb5uTA&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfDdZLIXbmdC5nHEGJwot5CQxF5XEGIv2jF0w7NIIpyufg&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBGHOLdhY7bM-yT4_OwAkCtlCtY7Bkl1NOGVnwGEIeKrQ&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar on January 25, 2023.",
              },
            },
            {
              node: {
                comments_disabled: false,
                __typename: "GraphImage",
                id: "2958100126276436954",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest",
                      },
                    },
                  ],
                },
                shortcode: "CkNSGRkvsPa",
                edge_media_to_comment: {
                  count: 1,
                },
                taken_at_timestamp: 1666853036,
                dimensions: {
                  height: 1350,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjk1ODEwMDEyNjI3NjQzNjk1NA%3D%3D.2-ccb7-5&oh=00_AfDAv5RoVCCzauz8gfnvZqsv1xTKMVCqhIKNvSw2wgqFyg&oe=643C1E2E&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 75,
                },
                edge_media_preview_like: {
                  count: 75,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjk1ODEwMDEyNjI3NjQzNjk1NA%3D%3D.2.c-ccb7-5&oh=00_AfAjAyDJqaSLEeqcFLLwYWVDaX9LzOKjihB2YkXguZ7IiA&oe=643C1E2E&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBExro994vuZy3WlFR9knAd4cqdpJF2qBXUJ9GsAZINFA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCsdsMWBU0xh_evC2yLgRt2c-fpPABzV8YI6_J-Djtlxw&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfC78UUVuNXyB7_DWpDxLJJ3vSe7m98NOLvNYIVGmbAQ_A&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCAnbJDZVjFt4owDzAfJPq6VX64vakO7prEiXhnGUxVOA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfAjAyDJqaSLEeqcFLLwYWVDaX9LzOKjihB2YkXguZ7IiA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar in The Onsen Hot Spring Resort.",
              },
            },
            {
              node: {
                comments_disabled: false,
                __typename: "GraphSidecar",
                id: "2789530329310740477",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest API",
                      },
                    },
                  ],
                },
                shortcode: "Ca2Zw4Qvr_9",
                edge_media_to_comment: {
                  count: 0,
                },
                taken_at_timestamp: 1646757950,
                dimensions: {
                  height: 806,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjc4OTUzMDMyNTE4MzUwMzI1Mg%3D%3D.2-ccb7-5&oh=00_AfBUjed2PD_8PGuEV7aXlXbqf-OHtmXoOaccm8-pqBgnjg&oe=643A9A08&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 68,
                },
                edge_media_preview_like: {
                  count: 68,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjc4OTUzMDMyNTE4MzUwMzI1Mg%3D%3D.2.c-ccb7-5&oh=00_AfAOej424HeQAMVeArU6u7qTOik3t-ijMOV11nFxUUbxOg&oe=643A9A08&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfACGMouNHc9H9eBdHEQy2NHMD6O9x0AfBECb115uP6STg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfC7zAwbkFDTxaJWBWNG9nzWANSIJYdxTBI_jSDKfxrnaw&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCd4oqXsPS2NwX05RJSvf7oEnEwi-UbotLTN5RnL5jxrg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCCiWa4n0p2ktUja_oLaxGJzj0hnmtsrRi7Jri4LBvNQw&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfAOej424HeQAMVeArU6u7qTOik3t-ijMOV11nFxUUbxOg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar on March 08, 2022.",
              },
            },
            {
              node: {
                comments_disabled: true,
                __typename: "GraphImage",
                id: "2650291139874625564",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang",
                      },
                    },
                  ],
                },
                shortcode: "CTHub_3l5gc",
                edge_media_to_comment: {
                  count: 0,
                },
                taken_at_timestamp: 1630159345,
                dimensions: {
                  height: 1349,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MjY1MDI5MTEzOTg3NDYyNTU2NA%3D%3D.2-ccb7-5&oh=00_AfAAx1CXxXc8VghIeoY8i62NahDuCmIi7xKGhUESmUvp4w&oe=643ACE49&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 116,
                },
                edge_media_preview_like: {
                  count: -1,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MjY1MDI5MTEzOTg3NDYyNTU2NA%3D%3D.2.c-ccb7-5&oh=00_AfBxnF4SISe-SOGZluxsuYfahTiIY_oqzbOjX5uWMNWbRw&oe=643ACE49&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfAzAsMJBcJUOqGIYzrxktbNXhjeKnX-PAlKCbeOXppqLQ&oe=643ACE49&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfDk-7_az4h1JPnMD-A5hqveBkU7q5e9ZpTrv7BrfjEb2w&oe=643ACE49&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCd60dtVUS6ccxW3ntwvfVH-IU2nB4VbjJsrWCG1OePbw&oe=643ACE49&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCD8Fz5twowPaYVTMeBRhEfQqAnQVE8Zs5WFT6-roDfIw&oe=643ACE49&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/240697691_3834458619987600_8853874627255403349_n.jpg?stp=c0.179.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=100&_nc_ohc=XLMm6qpsj0kAX8ThsUf&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBxnF4SISe-SOGZluxsuYfahTiIY_oqzbOjX5uWMNWbRw&oe=643ACE49&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar on August 28, 2021.",
              },
            },
          ],
        },
        edge_hashtag_to_top_posts: {
          edges: [
            {
              node: {
                __typename: "GraphImage",
                id: "3024075590742683540",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest kopi kenangan",
                      },
                    },
                  ],
                },
                shortcode: "Cn3rLpAJa-U",
                edge_media_to_comment: {
                  count: 0,
                },
                taken_at_timestamp: 1674717924,
                dimensions: {
                  height: 1350,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MzAyNDA3NTU5MDc0MjY4MzU0MA%3D%3D.2-ccb7-5&oh=00_AfA3Fov_nEVWBeD-0apUNtjhFE7tUrbFi7XeN8BE-hMAFA&oe=643BEAD0&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 71,
                },
                edge_media_preview_like: {
                  count: 71,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=MzAyNDA3NTU5MDc0MjY4MzU0MA%3D%3D.2.c-ccb7-5&oh=00_AfBGHOLdhY7bM-yT4_OwAkCtlCtY7Bkl1NOGVnwGEIeKrQ&oe=643BEAD0&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBo3-yWUV6ZwfjL6KbwWx-t2cU-FoZ8sIsnLj-sY1jXJQ&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfABF6nmvLcCnMRAV9N2qmUF9c5m3V0-9gJ3Yxl2j1wnIg&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBoYhysSVDFLJn_Xq8Bo30fLN64Cw2SoSxFp5aumb5uTA&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfDdZLIXbmdC5nHEGJwot5CQxF5XEGIv2jF0w7NIIpyufg&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/327097359_1536343450163834_712321172977430627_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IjZRy7FRV40AX_autzS&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBGHOLdhY7bM-yT4_OwAkCtlCtY7Bkl1NOGVnwGEIeKrQ&oe=643BEAD0&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar on January 25, 2023.",
              },
            },
            {
              node: {
                __typename: "GraphImage",
                id: "2958100126276436954",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest",
                      },
                    },
                  ],
                },
                shortcode: "CkNSGRkvsPa",
                edge_media_to_comment: {
                  count: 1,
                },
                taken_at_timestamp: 1666853036,
                dimensions: {
                  height: 1350,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjk1ODEwMDEyNjI3NjQzNjk1NA%3D%3D.2-ccb7-5&oh=00_AfDAv5RoVCCzauz8gfnvZqsv1xTKMVCqhIKNvSw2wgqFyg&oe=643C1E2E&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 75,
                },
                edge_media_preview_like: {
                  count: 75,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjk1ODEwMDEyNjI3NjQzNjk1NA%3D%3D.2.c-ccb7-5&oh=00_AfAjAyDJqaSLEeqcFLLwYWVDaX9LzOKjihB2YkXguZ7IiA&oe=643C1E2E&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfBExro994vuZy3WlFR9knAd4cqdpJF2qBXUJ9GsAZINFA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCsdsMWBU0xh_evC2yLgRt2c-fpPABzV8YI6_J-Djtlxw&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfC78UUVuNXyB7_DWpDxLJJ3vSe7m98NOLvNYIVGmbAQ_A&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCAnbJDZVjFt4owDzAfJPq6VX64vakO7prEiXhnGUxVOA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/313038319_656697975820042_7107540504312051987_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=110&_nc_ohc=VvjTqpEkqVIAX8zCJRx&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfAjAyDJqaSLEeqcFLLwYWVDaX9LzOKjihB2YkXguZ7IiA&oe=643C1E2E&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar in The Onsen Hot Spring Resort.",
              },
            },
            {
              node: {
                __typename: "GraphSidecar",
                id: "2789530329310740477",
                edge_media_to_caption: {
                  edges: [
                    {
                      node: {
                        text: "#ginidoanggampang\n\nTest API",
                      },
                    },
                  ],
                },
                shortcode: "Ca2Zw4Qvr_9",
                edge_media_to_comment: {
                  count: 0,
                },
                taken_at_timestamp: 1646757950,
                dimensions: {
                  height: 806,
                  width: 1080,
                },
                display_url:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjc4OTUzMDMyNTE4MzUwMzI1Mg%3D%3D.2-ccb7-5&oh=00_AfBUjed2PD_8PGuEV7aXlXbqf-OHtmXoOaccm8-pqBgnjg&oe=643A9A08&_nc_sid=d997c6",
                edge_liked_by: {
                  count: 68,
                },
                edge_media_preview_like: {
                  count: 68,
                },
                owner: {
                  id: "260653243",
                },
                thumbnail_src:
                  "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&ig_cache_key=Mjc4OTUzMDMyNTE4MzUwMzI1Mg%3D%3D.2.c-ccb7-5&oh=00_AfAOej424HeQAMVeArU6u7qTOik3t-ijMOV11nFxUUbxOg&oe=643A9A08&_nc_sid=d997c6",
                thumbnail_resources: [
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s150x150&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfACGMouNHc9H9eBdHEQy2NHMD6O9x0AfBECb115uP6STg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 150,
                    config_height: 150,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s240x240&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfC7zAwbkFDTxaJWBWNG9nzWANSIJYdxTBI_jSDKfxrnaw&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 240,
                    config_height: 240,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s320x320&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCd4oqXsPS2NwX05RJSvf7oEnEwi-UbotLTN5RnL5jxrg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 320,
                    config_height: 320,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s480x480&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfCCiWa4n0p2ktUja_oLaxGJzj0hnmtsrRi7Jri4LBvNQw&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 480,
                    config_height: 480,
                  },
                  {
                    src: "https://scontent-ord5-2.cdninstagram.com/v/t51.2885-15/275402263_252965633714522_332503920837679194_n.jpg?stp=c182.0.1075.1075a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=Phhi9E4tpHMAX9zEH41&edm=AA0rjkIBAAAA&ccb=7-5&oh=00_AfAOej424HeQAMVeArU6u7qTOik3t-ijMOV11nFxUUbxOg&oe=643A9A08&_nc_sid=d997c6",
                    config_width: 640,
                    config_height: 640,
                  },
                ],
                is_video: false,
                accessibility_caption: "Photo by Adi Bingar on March 08, 2022.",
              },
            },
          ],
        },
        edge_hashtag_to_content_advisory: {
          count: 0,
          edges: [],
        },
      },
    },
  });

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://instagram28.p.rapidapi.com/hash_tag_medias",
  //     params: { hash_tag: "ginidoanggampang" },
  //     headers: {
  //       "X-RapidAPI-Key": "5ecd9a9d68mshb82a5356592cfb0p1563bdjsnab65cd0d72f4",
  //       "X-RapidAPI-Host": "instagram28.p.rapidapi.com",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <main className="flex min-h-screen flex-col p-10">
      <h1>#ginidoanggampang</h1>
      <div className="mt-10 flex flex-wrap">
        {data?.data ? (
          (data.data.hashtag.edge_hashtag_to_media.edges as any[]).map((i, k) => (
            <div className="h-48 w-48 m-2 relative" key={k}>
              <Image
                src={`${i?.node.display_url}`}
                alt={"test"}
                fill
                className="rounded"
                style={{ objectFit: "cover" }}
              />
              <p className="absolute -bottom-10">
                {(i?.node.edge_media_to_caption.edges as any[]).map((p: any) => p?.node.text)}
              </p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
